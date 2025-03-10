import { Card, Container, Typography, Grid } from "@mui/material";
import MenuLateral from "../../Components/MenuLateral/MenuLateral";
import {Info} from '@mui/icons-material';

const Sobre = () => {
  return (
    <>
      <MenuLateral icone={<Info/>} />
      
      <Container>
        <Card sx={{ padding: 3, marginTop: 3 }}>
          <Typography variant="h4" gutterBottom>
            Sobre o Aplicativo Teste GetDemo
          </Typography>

          <Typography variant="body1" sx={{mb:2}}>
            O aplicativo Teste GetDemo tem como objetivo fornecer uma interface
            simples para a visualização e edição de demos e frames armazenadas
            no banco de dados postgree. Com ele, os usuários podem navegar por uma lista
            de demos, selecionar uma demo específica, visualizar os frames dessa
            demo e realizar edições no conteúdo dos frames.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Funcionalidades principais:
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h6">1. Listar Demos</Typography>
                <Typography variant="body2">
                  Exibir uma lista de demos armazenadas no banco de dados.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h6">2. Selecionar uma Demo</Typography>
                <Typography variant="body2">
                  Permitir ao usuário selecionar uma demo para visualizar os
                   frames dessa demo.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h6">3. Visualizar Frames</Typography>
                <Typography variant="body2">
                  Exibir um seletor de frames, permitindo ao usuário escolher um
                  frame específico para ser renderizado.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h6">4. Renderizar Frames</Typography>
                <Typography variant="body2">
                  O frame selecionado será renderizado dentro de um componente
                  `iframe`, permitindo que o usuário visualize o conteúdo de cada
                  frame da demo.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h6">5. Editar Conteúdo</Typography>
                <Typography variant="body2">
                  O usuário poderá editar o conteúdo de cada frame renderizado
                  através de um clique em cima do frame, permitindo a edição do html do frame.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h6">6. Salvar Alterações</Typography>
                <Typography variant="body2">
                  Todas as edições realizadas nos frames serão salvas de volta no
                  banco de dados.
                </Typography>
              </Card>
            </Grid>
          </Grid>
          <Typography sx={{mt:3}} variant="body1" gutterBottom>
            Para elaboração do front-end foi utilizada a biblioteca MaterialUi e Html com CSS, foi utilizado para envio da requisição do front-end para o back-end o axios.
          </Typography>
        </Card>
      </Container>
    </>
  );
};

export default Sobre;
