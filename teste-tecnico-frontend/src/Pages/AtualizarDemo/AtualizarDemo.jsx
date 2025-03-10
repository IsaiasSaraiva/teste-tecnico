import { useEffect, useState } from 'react';
import { Card, Container, Typography, Grid, Box, TextareaAutosize, Button } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom'; 
import axios from 'axios';
import MenuLateral from "../../Components/MenuLateral/MenuLateral";
import { Videocam } from '@mui/icons-material';

const AtualizarDemo = () => {
    const navigate = useNavigate();
    const [demos, setDemos] = useState([]);
    const { frameId } = useParams(); 
    const [frameHtml, setFrameHtml] = useState(''); 

    
    useEffect(() => {
        const buscarDemos = async () => {
            try {
                const response = await axios.get('http://localhost:3002/demos');
                setDemos(response.data); 
                console.log(response.data);
                console.log("Frame ID da URL:", frameId);
            } catch (error) {
                console.error("Erro ao buscar demos:", error);
            }
        };

        buscarDemos();
    }, [frameId]); 

    // Função para atualizar o HTML do frame
    const handleHtmlChange = (event) => {
        setFrameHtml(event.target.value);
    };

    // Função para atualizar o HTML do frame
    const atualizarFrame = async () => {
        try {
            const response = await axios.put(`http://localhost:3002/frames/${frameId}`, { html: frameHtml });
            console.log("HTML atualizado:", response.data);
            navigate('/')
        } catch (error) {
            console.error("Erro ao salvar o HTML:", error);
        }
    };

    
    useEffect(() => {
        const frame = demos.flatMap(demo => demo.frames).find(f => f.id === frameId);
        if (frame && frame.html) {
            setFrameHtml(frame.html); 
        }
    }, [demos, frameId]); 

    return (
        <>
            <MenuLateral icone={<Videocam/>} />
            <Container sx={{ mb: 15 }}>
                {/* Mapeando todas as demos */}
                {demos.map((demo) => {
                    // Encontrando o frame correspondente ao frameId dentro de cada demo
                    const frame = demo.frames.find(f => f.id === frameId);
                    console.log("Frame encontrado:", frame);

                    if (!frame) {
                        return null; 
                    }

                    return (
                        <Card key={demo.id} sx={{ marginBottom: 2, padding: 2 }}>
                            <Typography variant="h5" sx={{ marginBottom: 2 }}>
                                {demo.name}
                            </Typography>

                            
                            <Grid container spacing={3}>
                                
                                <Grid item xs={12} sm={6}>
                                    <Card sx={{ padding: 2, height: '400px', display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="h6">HTML do Frame:</Typography>
                                        <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: 1 }}>
                                            {/* Campo de texto editável para o HTML do frame */}
                                            <TextareaAutosize
                                                minRows={10}
                                                style={{ width: '100%', padding: '8px', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}
                                                value={frameHtml}
                                                onChange={handleHtmlChange}
                                            />
                                        </Box>
                                    </Card>
                                </Grid>

                                
                                <Grid item xs={12} sm={6}>
                                    <Card sx={{ padding: 2, height: '400px', display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="h6">HTML Renderizado:</Typography>
                                        <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: 1 }}>
                                            {/* Renderizando o HTML do frame */}
                                            <div
                                                style={{ width: '100%', overflowY: 'auto' }}
                                                dangerouslySetInnerHTML={{ __html: frameHtml }} 
                                            />
                                        </Box>
                                    </Card>
                                </Grid>
                            </Grid>

                            
                            <Button variant="contained"  sx={{ marginTop: 2, backgroundColor:'#182859' }} onClick={atualizarFrame}>
                                Salvar 
                            </Button>
                        </Card>
                    );
                })}
            </Container>
        </>
    );
};

export default AtualizarDemo;
