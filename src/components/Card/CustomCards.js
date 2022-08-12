import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { display } from '@mui/system';
import './style.css'

export default function CustomCard({ nomeProduto, descricao, imagePath, preco, units }) {
    return (
        <Card sx={{ maxWidth: '232px', height: '433.34px', borderRadius: '24px ' }} >
            <CardMedia
                component="img"
                height="240"
                image={imagePath}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color="text.secondary">
                    {nomeProduto}
                </Typography>
                <Typography variant="body2" color='#222222DE' sx={{ maxHeight: '80px', overflow: 'auto', marginBottom: '12px' }}>
                    {descricao}
                </Typography>
                <div style={{ backgroundColor: 'red' }}>
                    <Typography variant="captionText" align='left' color="text.secondary">
                        {units}UNIDADES
                    </Typography>
                    <Typography variant="captionText" align='right' color="text.secondary">
                        R${preco}
                    </Typography>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card >
    );
}