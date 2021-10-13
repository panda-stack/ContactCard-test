import { makeStyles, Box, Typography } from "@material-ui/core";
import Logo from './Logo'
import { Add } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    background: "#F9F9FC",
    borderRadius: "8px 8px 0px 0px",
    width: 362,
    height:81,
    marginTop: 40,
  },
  logo: {
    position: "absolute",
    top: -35,
    left: 0,
    zIndex: 10
  },
  body: {
    marginLeft: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "13px 19px"
  },
  name: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "17px",
    lineHeight: "20px"
  },
  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#818181"
  },
  filledIcon: {
    background: "#EAE8FE",
    border: "1px solid #835BF9",
    boxSizing: "border-box",
    borderRadius: "8px",
    width: 45,
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  },
  footer: {
    background: "#EAE8FE",
    borderRadius: "0px 0px 8px 8px",
    width: 362,
    height: 41,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  link: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#8463E7",
    textDecoration: "underline",
    marginLeft: 3,
    cursor: "pointer"
  }
}));
interface Props {
  card: any
}

export default function Review(props: Props) {
  const classes = useStyles({});
  const { card } = props;
  const avatarUrl = card.avatar.split("?")[0];
  const percent = Math.ceil(Math.random() * card.id % 100)
  console.log("percent====>", percent)
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.logo}>
          <Logo avatarUrl={avatarUrl} percent={percent} />
        </Box>
        <Box className={classes.body}>
          <Box>
            <Typography className={classes.name}>
              {card.last_name} {card.first_name}
            </Typography>
            <Typography className={classes.title}>
              {card.employment.title}
            </Typography>
          </Box>
          <Box className={classes.filledIcon}>
            <Add color="primary" />
          </Box>
        </Box>
      </Box>
      <Box className={classes.footer}>
        <Box display="flex">
          <Typography className={classes.title} style={{color: "#8463E7"}}>
            Sta già condividendo
          </Typography>
          <Typography className={classes.link}>
            Disney Plus 
          </Typography>
        </Box>
      </Box>
    </>
  )
}