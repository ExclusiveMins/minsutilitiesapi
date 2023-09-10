// FILE CONTAINING ALL SIMPLE ROUTES

import { app } from '../app';
import sql from '../db';

app.get('/chatlog/:id', async (req, res) => {
  const query = await sql`SELECT "html" FROM "Chatlog" WHERE id = ${req.params.id}`;
  if (query.length === 0) return res.status(404).send('No chat log with that ID exists. It may have been automatically deleted.');
  return res.send(query[0].html);
});

app.get('/invite', async (req, res) => {
  return res.redirect(`https://discord.com/api/oauth2/authorize?client_id=745401642664460319&permissions=3154439422&scope=bot%20applications.commands`);
});

app.get('*', async (req, res) => {
  return res.status(404).send('Page does not exist.');
});