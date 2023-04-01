import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListadoNoticias = () => {

    const { noticias,totalNoticias,handleChangePaginacion, paginacion} = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20);

    

    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant={"h3"}
                component={'h2'}
            >
                Últimas Noticias
            </Typography>



            <Stack 
                container
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                marginY={10}
             spacing={2}>
                <Pagination count={totalPaginas} page={paginacion}  onChange={handleChangePaginacion}
                 color="primary" />
            </Stack>

            <Grid
                container
                spacing={2}
            >
                {noticias.map(noticia => {
                    return (
                        <Noticia
                            noticia={noticia}
                            key={noticia.url}
                        />
                    )
                })}
            </Grid>

        </>
    )
}

export default ListadoNoticias