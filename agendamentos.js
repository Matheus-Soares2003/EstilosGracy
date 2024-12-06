const supabaseUrl = 'https://url.supabase.co';
const supabaseAnonKey = 'sua_chave';

async function fetchData() {

  var usuarioLogado = sessionStorage.getItem('usuarioLogado');
  if (usuarioLogado !== '1') {
      window.location.href = "login.html"
      return;
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/view_agendamentos?select=*`, {
    headers: {
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${supabaseAnonKey}`
    }
  });

  const data = await response.json();

  const agendamentosTableBody = document.getElementById('agendamentos');

  data.forEach(agendamento => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${agendamento.username}</td>
      <td>${agendamento.cabeleireiro}</td>
      <td>${agendamento.tipo_de_corte}</td>
      <td>${agendamento.data_agendamento}</td>
      <td><button class='concluir' id=${agendamento.id} onclick="marcarComoConcluido(this)">Concluir</button></td>
    `;
    agendamentosTableBody.appendChild(row);
  });
}

async function marcarComoConcluido(elemento) {
  try{
      const response = await fetch(`${supabaseUrl}/rest/v1/agendamentos?id=eq.${elemento.id}`, {
          method: 'PATCH',
          headers: {
          'apikey': supabaseAnonKey,
          'Authorization': `Bearer ${supabaseAnonKey}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
          },
          body: JSON.stringify({ concluido: true })
      });
      
      if (!response.ok) {
          throw new Error('Falha ao atualizar o agendamento');
      }
      alert('Agendamento marcado como concluído com sucesso!');
      window.location.reload();
  } catch (error) {
      console.error('Erro ao atualizar o agendamento:', error);
  }
}