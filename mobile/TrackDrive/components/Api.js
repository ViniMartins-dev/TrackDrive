import axios from 'axios';

const API_BASE_URL = 'http://10.0.2.2:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchCar = async (setRegistros) => {
  try {
    const response = await api.get('/veiculo');
    setRegistros(response.data.data); // ajuste conforme a estrutura do retorno
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};



export const deleteCar = async (id, setRegistros, registros) => {
  try {
    await api.delete(`/veiculo/${id}`);
    const novosRegistros = registros.filter(item => item.id !== id);
    setRegistros(novosRegistros);
  } catch (error) {
    console.error('Erro ao deletar:', error);
  }
};

export const createCar = async (newCar, navigation) => {
  try {
    await api.post('/veiculo', newCar);
    alert('Cadastro realizado com sucesso!');
    navigation.goBack();
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    alert('Erro ao cadastrar. Tente novamente.');
  }
};

export const updateCar = async (id, updatedCar, navigation) => {
  try {
    await api.put(`/veiculo/${id}`, updatedCar);
    alert('Atualização realizada com sucesso!');
    navigation.goBack();
  } catch (error) {
    console.error('Erro ao atualizar:', error);
    alert('Erro ao atualizar. Tente novamente.');
  }
};

export const rentCar = async (id) => {
  try {
    await api.patch(`/veiculo/${id}`);
  } catch (error) {
    console.error('Erro ao alugar:', error);
    alert('Erro ao alugar. Tente novamente.');
  }
}
