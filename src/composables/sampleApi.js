import { ref } from 'vue';
import axios from 'axios';

export default function useSample() {
  const sampleData = ref([]);
  const error = ref(null);

  const getAllSample = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/customers'); // Adjust the endpoint
      sampleData.value = response.data;
      console.log('Data fetched:', sampleData.value);
    } catch (err) {
      error.value = err;
      console.error('Error fetching data:', err.message);
    }
  };

  return { sampleData, error, getAllSample };
}
