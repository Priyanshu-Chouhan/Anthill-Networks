import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button, Card, CardContent, CardMedia, TextField, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText, Select, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, doc, getDoc, setDoc, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { Car, PurchaseRequest } from '../types';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [requests, setRequests] = useState<PurchaseRequest[]>([]);
  const [open, setOpen] = useState(false);
  const [editCar, setEditCar] = useState<Partial<Car> | null>(null);

  const fetchCars = async () => {
    const carSnapshot = await getDocs(collection(db, 'cars'));
    setCars(carSnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({ id: doc.id, ...doc.data() } as Car)));
  };

  const fetchRequests = async () => {
    const reqSnapshot = await getDocs(collection(db, 'requests'));
    setRequests(reqSnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({ id: doc.id, ...doc.data() } as PurchaseRequest)));
  };

  useEffect(() => {
    fetchCars();
    fetchRequests();
  }, []);

  const handleOpen = (car?: Car) => {
    setEditCar(car || {});
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    if (editCar?.id) {
      await updateDoc(doc(db, 'cars', editCar.id), editCar);
    } else {
      await addDoc(collection(db, 'cars'), editCar);
    }
    setOpen(false);
    fetchCars();
  };

  const handleRequestStatus = async (req: PurchaseRequest, status: 'approved' | 'rejected') => {
    await updateDoc(doc(db, 'requests', req.id), { status });
    fetchRequests();
  };

  return (
    <Container>
      <Box mt={4} mb={2} textAlign="center">
        <Typography variant="h4">Admin Dashboard</Typography>
        <Button variant="contained" color="primary" onClick={() => handleOpen()}>Add Car</Button>
      </Box>
      <Grid container spacing={3}>
        {cars.map(car => (
          <Grid item xs={12} sm={6} md={4} key={car.id} component="div">
            <Card>
              <CardMedia component="img" height="140" image={car.imageUrl} alt={car.make + ' ' + car.model} />
              <CardContent>
                <Typography variant="h6">{car.make} {car.model} ({car.year})</Typography>
                <Typography>Price: ${car.price}</Typography>
                <Button variant="outlined" onClick={() => handleOpen(car)}>Edit</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editCar?.id ? 'Edit Car' : 'Add Car'}</DialogTitle>
        <DialogContent>
          <TextField label="Make" fullWidth margin="dense" value={editCar?.make || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditCar({ ...editCar, make: e.target.value })} />
          <TextField label="Model" fullWidth margin="dense" value={editCar?.model || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditCar({ ...editCar, model: e.target.value })} />
          <TextField label="Year" type="number" fullWidth margin="dense" value={editCar?.year || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditCar({ ...editCar, year: Number(e.target.value) })} />
          <TextField label="Price" type="number" fullWidth margin="dense" value={editCar?.price || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditCar({ ...editCar, price: Number(e.target.value) })} />
          <TextField label="Image URL" fullWidth margin="dense" value={editCar?.imageUrl || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditCar({ ...editCar, imageUrl: e.target.value })} />
          <TextField label="Description" fullWidth margin="dense" value={editCar?.description || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditCar({ ...editCar, description: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
      <Box mt={6}>
        <Typography variant="h5">Purchase Requests</Typography>
        <List>
          {requests.map(req => (
            <ListItem key={req.id} divider>
              <ListItemText primary={`Car: ${req.carId} | User: ${req.userId} | Status: ${req.status}`} />
              <Select value={req.status} onChange={e => handleRequestStatus(req, e.target.value as any)}>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="approved">Approve</MenuItem>
                <MenuItem value="rejected">Reject</MenuItem>
              </Select>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default AdminDashboard; 