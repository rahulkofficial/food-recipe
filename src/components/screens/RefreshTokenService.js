import axios from 'axios';

const RefreshTokenService = async () => {
  const refreshToken=localStorage.getItem('refreshToken');
  const base_url=localStorage.getItem('base_url');

  try {
    const response = await axios.post(`${base_url}/api/v1/recipes/refresh-token`, { refresh_token: refreshToken });
    localStorage.setItem('accessToken',response.data.access_token);
    window.location.reload();
    return response.data.access_token;
  } catch (error) {
    throw new Error('Failed to refresh access token');
  }
};

export default RefreshTokenService;