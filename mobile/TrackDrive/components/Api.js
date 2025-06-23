const API_BASE_URL = 'https://webapptech.site/apitrackdrive/api/';

export const fetchCar = async (setRegistros) => {
  try {
    const response = await fetch(`${API_BASE_URL}veiculo`);
    const data = await response.json();
    setRegistros(data.data.map(v => ({ ...v })));
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};

export const deleteCar = async (id, setRegistros, registros) => {
  try {
    await fetch(`${API_BASE_URL}veiculo/${id}`, {
      method: 'DELETE',
    });
    const novosRegistros = registros.filter(item => item.id !== id);
    setRegistros(novosRegistros);
  } catch (error) {
    console.error('Erro ao deletar:', error);
  }
};

export const createCar = async (newCar, navigation) => {
  try {
    await fetch(`${API_BASE_URL}veiculo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCar),
    });
    alert('Cadastro realizado com sucesso!');
    navigation.goBack();
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    alert('Erro ao cadastrar. Tente novamente.');
  }
};

export const updateCar = async (id, updatedCar, navigation) => {
  try {
    await fetch(`${API_BASE_URL}veiculo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCar),
    });
    alert('Atualização realizada com sucesso!');
    navigation.goBack();
  } catch (error) {
    console.error('Erro ao atualizar:', error);
    alert('Erro ao atualizar. Tente novamente.');
  }
};

export const rentCar = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}veiculo/${id}`, {
      method: 'PATCH',
    });

    if (!response.ok) {
      throw new Error('Erro ao alugar ou devolver o veículo');
    }

    const updatedCar = await response.json();
    return updatedCar;
  } catch (error) {
    console.error('Erro ao alugar:', error);
    throw error;
  }
};
