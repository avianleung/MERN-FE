import axios from "./index"

const helloWorld = async () => {
    try {
      const response = await axios.get(`/example/`);
      return response;
    } catch (error) {
      // Handle or throw error
      throw error;
    }
}

const exampleService = {
    helloWorld
}

export default exampleService;