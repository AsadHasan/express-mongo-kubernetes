import {TestCase} from '../src/models/testcase';
import axios, {AxiosResponse} from 'axios';

describe('Service', () => {
  const baseUrl: string | undefined = process.env.BASE_URL;
  const test: TestCase = {
    name: 'Smoke test',
    summary: 'Sanity testing',
    description: 'Sanity testing the system before further testing',
  };

  it("should create a 'Test' item", async () => {
    const response: AxiosResponse<TestCase> = await axios({
      method: 'post',
      url: `${baseUrl}/test-case`,
      data: JSON.stringify(test),
    });
    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
    const responseBody: TestCase = response.data;
    console.log(responseBody);
    expect(responseBody.name).toBe(test.name);
    expect(responseBody.summary).toBe(test.summary);
    expect(responseBody.description).toBe(test.description);
    expect(responseBody._id).toBeTruthy();
  });

  it('should return list of test cases', async () => {
    const response: AxiosResponse<TestCase[]> = await axios({
      method: 'get',
      url: `${baseUrl}/testcases`,
    });
    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
    const responseBody: TestCase[] = response.data;
    expect(responseBody.length).toBe(1);
    const responseTestCase = responseBody[0];
    console.log(responseTestCase);
    expect(responseTestCase.name).toBe(test.name);
    expect(responseTestCase.summary).toBe(test.summary);
    expect(responseTestCase.description).toBe(test.description);
    expect(responseTestCase._id).toBeTruthy();
    expect(responseTestCase.__v).toBe(0);
  });
});
