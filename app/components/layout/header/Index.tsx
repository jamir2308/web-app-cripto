import { Avatar, Grid, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import { deepPurple } from "@mui/material/colors";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Selected, Wraper } from "./Index.styles";
import MenuIcon from '@mui/icons-material/Menu';

function Index() {
  const router = usePathname();

  const isActive = (pathname: string) => router.includes(pathname);
  return (
    <Wraper sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexGrow: 1 }}
        >
          <Grid item>
            <Image src='/jp-logo.png' width={60} height={60} alt="JP logo" />
          </Grid>
          <MenuIcon className="mobile"/>
          <Grid item xs className="desktop">
            <Grid
              container
              justifyContent="center"
              spacing={4}
              alignItems="center"
            >
              <Grid item>
                <Link href="/dashboard/products">
                  <Selected className={isActive('/products') ? 'active' : ''}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      Product
                    </Typography>
                  </Selected>
                </Link>
              </Grid>
              <Grid item>
              <Selected className={isActive('/other') ? 'active' : ''}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='grey'>
                  Operaciones
                </Typography>
                </Selected>
              </Grid>
              <Grid item>
              <Selected className={isActive('/other') ? 'active' : ''}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='grey'>
                  Analitica
                </Typography>
                </Selected>
              </Grid>
            </Grid>
          </Grid>
          <Grid className="desktop">
            <Link href="/dashboard/profile">
              <Avatar sx={{ bgcolor: deepPurple[500] }}>JP</Avatar>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </Wraper>
  );
}

export default Index;
