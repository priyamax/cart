
import  React from 'react';
import './App.css';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import dubai from './uae.jfif';
import briyani from './Biryani.jpg'
import expand from './expand.png';
import jam from './jam1.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Rating from '@mui/material/Rating';


export default function BasicCard() {

const [count, setCount] = React.useState(0);
const [toggle1, settoggle1] = React.useState(true);
const [toggle2, settoggle2] = React.useState(true);
const [toggle3, settoggle3] = React.useState(true);
const [value, setValue] = React.useState(3);
const [value1, setValue1] = React.useState(5);
const [value2, setValue2] = React.useState(4);
const btnclick= (e) =>{

               if(e.target.name === 'btn1')
               {
                   if(toggle1 === true)
                   {
                   setCount(count + 1);
                   settoggle1(!toggle1);
                   }
                   else{
                       setCount(count-1);
                       settoggle1(!toggle1);
                   }
               }
               if(e.target.name=== 'btn2'){
               if(toggle2 === true)
                   
                {
                     setCount(count + 1);
                     settoggle2(!toggle2);
                   }
                   else{
                       setCount(count-1);
                       settoggle2(!toggle2);
                   }
               }
               if(e.target.name=== 'btn3'){
               if(toggle3 === true)
                    {
                    setCount(count + 1);
                    settoggle3(!toggle3);
                    }
                 else{
                    setCount(count-1);
                    settoggle3(!toggle3);
                    }
                }
    }

  return (
      
    <Card sx={{width:'1310px', height:'560px',backgroundImage: 'linear-gradient(to right,#33AEFF,#0062E6 )', padding: '2%', marginLeft:'0%',display:'flex', gap:'25px',overflowX:'none'}}>
     <Card sx={{ width: 350, height: 580, marginLeft:'105px' ,borderRadius:'25px',transition:'0.5s ease-in-out','&:hover':{transform:'translateY(-10px)',boxShadow:'-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)',img:{transform:'scale(1.05)',},Button:{opacity:'1',}},}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight:700}} color="#989FA4"  gutterBottom>
          THE BOOK OF TRAVEL
        </Typography>
        <img className='dubaipic' src={dubai} alt='buj kalifa'/>
        <hr></hr>
        <div className='div1'>
        <div class="paradiv1">
            <span><u><b><i>UNITED ARAB EMIRATES-DUBAI</i></b></u></span>
        </div>
        </div>
        <div class='div2'>
            <ul type='square'>
                <li>
                <span>A city of many faces , <b>Dubai</b> is one of the most popular tourist destinations in the world.</span>
                </li>
                <li>
                    <span><b>Burj Khalifa </b> is the tallest tower in the world and it's one of the top attractions to visit in Dubai.</span>
                </li>
                <li>
                <span>It has abundant opportunities when it comes to adventure activities <span className='readmore'> to read more <img className='img2' src={expand}/></span></span>
                </li>
            </ul>
            <span className="redclr">Buy Now</span>@ 499
        </div>
        <div className='ratings'>
        <Rating name="read-only" fontSize='small' value={value} readOnly />
        <span>18,856 ratings</span> 
        </div>
        {toggle1 ?
        <Button  class="btn" name='btn1' onClick={btnclick} variant="contained">ADD TO CART</Button> : 
         <Button  class="btn"name='btn1'  onClick={btnclick} variant="contained" >REMOVE FROM CART</Button> }
        </CardContent>
    </Card>
    <Card sx={{ width: 350, height: 580,borderRadius:'25px',transition:'0.5s ease-in-out','&:hover':{transform:'translateY(-10px)',boxShadow:'-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)',img:{transform:'scale(1.05)',},Button:{opacity:'1',}},}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight:700}} color="#989FA4"  gutterBottom>
         RECIPIES WORLD
        </Typography>
        <img className='briyanipic' src={briyani} alt='chicken-briyani'/>
        <hr></hr>
        <div className='div1'>
        <div class="paradiv1">
            <span><u><b><i>INDIAN CUISINE-BRIYANI</i></b></u></span>
        </div>
        </div>
        <div class='div2'>
            <ul type='square'>
                <li>
                <span><b>Biryani</b> is an evergreen classic that really needs no introduction.</span>
                </li>
                <li>
                    <span>It is a <b>mixed rice dish</b> originating among the Muslims of the Indian subcontinent.</span>
                </li>
                <li>
                <span>It is made with Indian spices, rice, and meat usually that of <b>chicken</b>, <b>goat</b>,<b> prawn </b>, <b>fish</b>, and some  <span className='readmore'> to read more <img className='img2' src={expand}/></span> </span>
                </li>
            </ul>
            <span className="redclr">Buy Now</span>@ 350
        </div>
        <div className='ratings'>
        <Rating name="read-only" fontSize='small' value={value1} readOnly />
        <span>33,236 ratings</span> 
        </div>
        {toggle2 ?
        <Button  class="btn" name='btn2' onClick={btnclick} variant="contained">ADD TO CART</Button> : 
         <Button  class="btn"name='btn2'  onClick={btnclick} variant="contained" >REMOVE FROM CART</Button> }
        </CardContent>
    </Card>
    <Card sx={{ width: 350, height: 580,borderRadius:'25px',transition:'0.5s ease-in-out','&:hover':{transform:'translateY(-10px)',boxShadow:'-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)',img:{transform:'scale(1.05)',},Button:{opacity:'1',}},}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight:700}} color="#989FA4"  gutterBottom>
         ENTERTAINMENT WORLD
        </Typography>
        <img className='jampic' src={jam} alt='Just add magic'/>
        <hr></hr>
        <div className='div1'>
        <div class="paradiv1">
            <span><u><b><i>TV SHOW-JUST ADD MAGIC</i></b></u></span>
        </div>
        </div>
        <div class='div2'>
            <ul type='square'>
                <li>
                <span><b>Just Add Magic</b> is an American live-action family television series.</span>
                </li>
                <li>
                    <span><i>Kelly Quinn</i> and her two best friends, <b>Darbie </b> and <b> Hannah </b>.</span>
                </li>
                <li>
                <span>They find Kelly's grandmother's cookbook in the attic and discover some strange recipes. They soon began to realise they have a <span className='readmore'> to read more <img className='img2' src={expand}/></span></span>
                </li>
                
            </ul>
            <span className="redclr">Buy Now</span>@ 590
        </div>
       
        <div className='ratings'>
        <Rating name="read-only" fontSize='small' value={value2} readOnly />
        <span>28,324 ratings</span> 
        </div>
        {toggle3 ?
        <Button  class="btn" name='btn3' onClick={btnclick} variant="contained">ADD TO CART</Button> : 
         <Button  class="btn"name='btn3'  onClick={btnclick} variant="contained" >REMOVE FROM CART</Button> }
        </CardContent>
    </Card>
    <Badge color="secondary" badgeContent={count}>
        <ShoppingCartIcon  fontSize='large' color='main'/>
    </Badge>
    </Card>
  );
}