import { useEffect, useState } from 'react';
import axios from 'axios';  
import MenuLateral from '../../Components/MenuLateral/MenuLateral';
import { Card, Container, Typography, Grid, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Videocam } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Demos() {
  const [demos, setDemos] = useState([]);
  const [selectedDemo, setSelectedDemo] = useState(null); 
  const [selectedFrame, setSelectedFrame] = useState(null); 

  const navigate = useNavigate();

  
  useEffect(() => {
    const buscarDemos = async () => {
      try {
        const response = await axios.get('http://localhost:3002/demos'); 
        console.log(response);  
        setDemos(response.data); 
      } catch (error) {
        console.error("Erro ao buscar demos:", error);
      }
    };

    buscarDemos();
  }, []);

  // Função para selecionar a demo
  const handleSelectDemo = (demoId) => {
    const demo = demos.find(demo => demo.id === demoId);
    setSelectedDemo(demo);
    setSelectedFrame(null); 
  };

  // Função para selecionar o frame
  const handleSelectFrame = (frameId) => {
    const frame = selectedDemo.frames.find(f => f.id === frameId);
    setSelectedFrame(frame);
  };

  
  const sortedFrames = selectedDemo ? [...selectedDemo.frames].sort((a, b) => a.order - b.order) : [];

  // Função para redirecionar para edição de frame
  const handleEditFrame = (frameId) => {
    navigate(`/atualizar-demo/${frameId}`);
  };

  return (
    <>
      <MenuLateral icone={<Videocam />} />
      <Container>
        {/* Listando as demos */}
        <Typography variant="h5" sx={{ marginBottom: 2 }}>Selecione uma Demo</Typography>
        <Grid container spacing={2}>
          {demos.map((demo) => (
            <Grid item xs={12} sm={6} md={4} key={demo.id}>
              <Card sx={{ padding: 2 }}>
                <Typography variant="h6" sx={{mb:2}}>{demo.name}</Typography>
                <Button variant="contained" sx={{backgroundColor: '#182859'}} onClick={() => handleSelectDemo(demo.id)}>Selecionar</Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        {selectedDemo && (
          <div>
            <Typography variant="h6" sx={{ marginTop: 4 }}>Selecione um Frame</Typography>
            <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel>Frames</InputLabel>
              <Select
                value={selectedFrame ? selectedFrame.id : ''}
                onChange={(e) => handleSelectFrame(e.target.value)}
                label="Frames"
              >
                {sortedFrames.map((frame) => (
                  <MenuItem key={frame.id} value={frame.id}>
                    Frame {frame.order + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Renderizando o frame selecionado */}
            {selectedFrame && (
              <div style={{ marginTop: 20 }}>
                <Typography variant="h6">Frame renderizado:</Typography>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '900px',  
                  }}
                >
                  <iframe
                    srcDoc={selectedFrame.html}
                    title={`Frame ${selectedFrame.order + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      backgroundColor: 'white'
                    }}
                  ></iframe>

                  {/* Camada clicável sobre o iframe */}
                  <div
                    onClick={() => handleEditFrame(selectedFrame.id)}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'rgba(0, 0, 0, 0.2)',  
                      zIndex: 10,
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
    </>
  );
}

export default Demos;
