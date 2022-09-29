import axios from 'axios';

export const handleSubmit = async (id, name, email, password, registr_data) => {
  try {
    const res = await axios.post(
      '/auth/register',
      JSON.stringify({
        id,
        user_name: name,
        email,
        password,
        registr_data,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    console.log('Response', res);
  } catch (error) {
    return error;
  }
};

export const getUsers = async () => await axios.get();
