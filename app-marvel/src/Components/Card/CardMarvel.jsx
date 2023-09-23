
import React from 'react';
import {  Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './card.scss';

export default function CardMarvel({ character }) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/detail/${character.id}`); 
  };

  return (
    <Card className="CardMarvel" onClick={handleCardClick}>
      <CardMedia
        className="card-image"
        component="img"
        alt={character.name}
        height="260"
        image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {character.name}
          
        </Typography>
        
      </CardContent>
    </Card>
  );
}
