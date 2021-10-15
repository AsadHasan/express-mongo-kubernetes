import {Response, Request} from 'express';
import {TestCase} from './models/testcase';
import 'dotenv-defaults/config';
import express = require('express');
import mongoose = require('mongoose');
import console = require('console');

const app = express();
const port = process.env.EXPRESS_PORT_NUMBER;
const testCaseSchema = new mongoose.Schema<TestCase>({
  name: String,
  summary: String,
  description: String,
});
const testCaseModel = mongoose.model<TestCase>('TestCase', testCaseSchema);
const connectToMongo = async () =>
  mongoose.connect(
    `mongodb://${process.env.DBHOSTNAME}:${process.env.MONGO_PORT_NUMBER}/test`
  );

app.use(express.json());
app.listen(port);

app.get('/testcases', async (req: Request, res: Response) => {
  const testCases = await testCaseModel.find({});
  res.status(200).send(JSON.stringify(testCases));
});

app.post('/test-case', (req: Request, res: Response) => {
  const testCaseData: TestCase = req.body;
  const testCaseDocument = new testCaseModel(testCaseData);
  testCaseDocument.save();
  res.status(200).send(JSON.stringify(testCaseDocument));
});

connectToMongo().catch(err => console.log(err));
