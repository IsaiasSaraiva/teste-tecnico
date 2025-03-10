import { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography} from '@mui/material';
import { Videocam, Info, Menu,} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MenuLateral = ({ icone }) => {
    const [drawer, setDrawer] = useState(false);

    const navigate = useNavigate();

    const itensDoMenu = [
        { texto: 'Demos', icone: <Videocam />, destino: '/' }, 
        { texto: 'Sobre', icone: <Info />, destino: '/sobre' } 
    ];

    return (
        <>
            <Drawer open={drawer} onClose={() => setDrawer(false)}>
                <Box sx={{ width: 250, fontFamily: 'OCR A Extended' }}>
                    <List>
                        {itensDoMenu.map((itemDoMenu, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton onClick={() => navigate(itemDoMenu.destino)}>
                                    <ListItemIcon>{itemDoMenu.icone}</ListItemIcon>
                                    <ListItemText primary={itemDoMenu.texto} sx={{ fontFamily: 'OCR A Extended' }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            <Box sx={{ display: 'flex', mb: 7 }}>
                <CssBaseline />
                <AppBar sx={{ backgroundColor: '#182859', position: 'relative' }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <IconButton sx={{ marginRight: '36px', color: '#fff' }} onClick={() => setDrawer(true)}>
                            <Menu />
                        </IconButton>

                        <Typography
                            variant="body1"
                            sx={{
                                marginRight: '10px',
                                color: '#fff',
                                fontFamily: 'OCR A Extended',
                                textAlign: 'right',
                                '@media (max-width: 600px)': {
                                    whiteSpace: 'pre-line' 
                                }
                            }}
                        >
                            {new Date().toLocaleDateString('pt-BR', {
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric'
                            })}
                        </Typography>

                        {icone && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                {icone}
                            </Box>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

MenuLateral.propTypes = {
    notificacao: PropTypes.string,
    icone: PropTypes.node
};

export default MenuLateral;
