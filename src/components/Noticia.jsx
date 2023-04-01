import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

const Noticia = ({ noticia }) => {

    const { urlToImage, url, title, description, source } = noticia

    console.log(noticia)
    return (
        <Grid item md={6} lg={3}>
            <Card>
                {(
                    <CardMedia
                        component={'img'}
                        alt={`imagen de la noticia ${title}`}
                        image={urlToImage !== null ? urlToImage : 'http://www.publicengagement.ac.uk/sites/default/files/styles/content_width/public/hero/large-crowd-of-people-small.jpg'}
                        height={'250'}
                    />
                )}

                <CardContent>
                    <Typography
                        variant="body1"
                        color={'error'}
                    >
                        {source.name}
                    </Typography>
                    <Typography
                        variant="body1"
                        component={'div'}
                        marginY={2}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"

                        marginY={0}
                    >
                        {description}
                    </Typography>
                    <CardActions>
                        <Link href={url} target="_blank"
                            variant="button"
                            color={'primary'}
                            width={'100%'}
                            textAlign={'center'}
                            marginTop={2}
                            sx={{
                                textDecoration: 'none'
                            }}
                        >
                            Leer Noticia
                        </Link>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Noticia