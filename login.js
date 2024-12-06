const supabaseUrl = 'https://url.supabase.co';
const supabaseAnonKey = 'sua_chave';

async function login() {
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    try {
        const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
            method: 'POST',
            headers: {
                'apikey': supabaseAnonKey,
                'Content-Type': `application/json`
            },
            body: JSON.stringify(
                { 
                    "email": email,
                    "password": senha
                }
            )
        });

        if (!response.ok) {
            throw new Error('Falha ao logar');
        }
        sessionStorage.setItem('usuarioLogado', '1');
        window.location.href = "agendamentos.html"

    } catch (e) {
        alert("NÃO FOI POSSÍVEL FAZER O LOGIN! USUÁRIO E/OU SENHA NÃO BATEM!")
        console.error('Erro ao tentar logar', error);
    }
}