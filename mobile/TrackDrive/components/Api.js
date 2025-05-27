import axios from 'axios';

const API_URL = 'http://10.0.2.2:8000/api';

export const fetchCar = async (setRegistros) => {
    try {
        const response = await axios.get(`${API_URL}/veiculo/index`); // Ajuste o endpoint conforme sua API Laravel
        setRegistros(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
};

export const deleteCar = async (id, setRegistros, registros) => {
    try {
        await axios.delete(`${API_URL}/destroy/${id}`); // Ajuste conforme sua rota DELETE na API
        const novosRegistros = registros.filter(item => item.codigo !== id);
        setRegistros(novosRegistros);
    } catch (error) {
        console.error('Erro ao deletar:', error);
    }
};

export const createCar = async (newCar, navigation) => {
    try {
        await axios.post(`${API_URL}/store`, newCar); // Ajuste o endpoint se necessário
        alert('Cadastro realizado com sucesso!');
        navigation.goBack(); // Voltar para a tela anterior (lista)
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
        alert('Erro ao cadastrar. Tente novamente.');
    }
};

export const updateCar = async (id, updatedCar, navigation) => {
    try {
        await axios.put(`${API_URL}/update/${id}`, updatedCar); // Ajuste a rota conforme seu backend
        alert('Atualização realizada com sucesso!');
        navigation.goBack(); // Voltar para a tela anterior, normalmente a lista
    } catch (error) {
        console.error('Erro ao atualizar:', error);
        alert('Erro ao atualizar. Tente novamente.');
    }
};
