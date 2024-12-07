import React from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';

const ItemList = ({ title, items }) => {
  return (
    <Card>
      <CardContent>
        <h3>{title}</h3>
        <List>
          {items.length === 0 ? (
            <ListItem>
              <ListItemText primary="Nenhum item adicionado." />
            </ListItem>
          ) : (
            items.map((item, index) => (
              <div key={index}>
                <ListItem>
                  <ListItemText primary={JSON.stringify(item)} />
                </ListItem>
                <Divider />
              </div>
            ))
          )}
        </List>
      </CardContent>
    </Card>
  );
};

export default ItemList;
