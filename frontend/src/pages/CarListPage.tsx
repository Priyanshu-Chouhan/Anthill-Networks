import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Card, CardContent, CardMedia, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { db } from '../firebase';
import { collection, getDocs, addDoc, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { Car } from '../types';
import { useAuth } from '../contexts/AuthContext';

const CarListPage: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchCars = async () => {
      const carSnapshot = await getDocs(collection(db, 'cars'));
      setCars(carSnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({ id: doc.id, ...doc.data() } as Car)));
    };
    fetchCars();
  }, []);

  const handleRequest = async (carId: string) => {
    if (!user) return;
    await addDoc(collection(db, 'requests'), {
      carId,
      userId: user.uid,
      status: 'pending',
      createdAt: new Date(),
    });
    alert('Request sent!');
  };

  return (
    <Container>
      <Box mt={4} mb={2} textAlign="center">
        <Typography variant="h4">Available Cars</Typography>
      </Box>
      <Grid container spacing={3}>
        {cars.map(car => (
          <Grid item xs={12} sm={6} md={4} key={car.id} component="div">
            <Card>
              <CardMedia component="img" height="140" image={car.imageUrl} alt={car.make + ' ' + car.model} />
              <CardContent>
                <Typography variant="h6">{car.make} {car.model} ({car.year})</Typography>
                <Typography>Price: ${car.price}</Typography>
                <Typography variant="body2" color="textSecondary">{car.description}</Typography>
                {user && (
                  <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={() => handleRequest(car.id)}>
                    Request to Buy
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CarListPage; 