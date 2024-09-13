"use client"
import { Box, Container, Typography, Stack, CircularProgress,} from "@mui/material";

import React from 'react'

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters 
      className = "bg-black h-screen w-full flex">
        <Box sx={{ flexGrow: 1,}}>
          <Stack direction="column" className="h-full w-full p-10 ">
            <Container className="h-full w-full ">
              <Stack direction="column" justifyContent="space-between" alignItems="center" className = "h-full" >
                <Box className="flex flex-col justify-center items-center normal-case">
                  <Typography 
                    variant="h6"
                    color="white"
                    sx={{
                      fontFamily: "var(--font-permanent-marker)",
                      fontSize: '3rem',
                      fontStyle: 'italic'
                    }}>Lorem </Typography>
                  <Typography 
                    component="span" 
                    variant="h6"
                    color="white"
                    sx={{
                      fontFamily: "var(--font-permanent-marker)",
                      fontSize: '3rem',
                      fontStyle: 'italic'
                    }}>ipsum</Typography>
                </Box>
                
                <CircularProgress 
                  size={60} 
                  className="text-white w-10"
                  thickness={8}
                  sx={{
                    '@keyframes rotate': {
                      '0%': { transform: 'rotate(0deg)' },
                      '100%': { transform: 'rotate(360deg)' },
                    },
                    animation: 'rotate 15s linear infinite',
                  }}></CircularProgress>
              </Stack>
            </Container>
            
          </Stack>
        </Box>
        
    </Container>
  )
}

// import Image from "next/image";

// export default function Home() {

//   const [index, setIndex] = useState<number>(0);
//   const [dartDojoText, setDartDojoText] = useState("");
//   const [change, shouldChange] = useState(0);
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [textDone, setTextDone] = useState(false);

//   useEffect(() => {
//     const text: string = "Dart Dojo";

//     const updateText = () => {
//       if (index < text.length) {
//         setDartDojoText(text.substring(0, index + 1));
//         setIndex(index + 1);
//         shouldChange(prevNum => prevNum + 10);
//       } else {
//         shouldChange(20)

//         setTimeout(()=> {
//           setTextDone(true);
//         }, 1000)
//       }
//     };

//     const timeoutId = setTimeout(updateText, 50);

//     return () => clearTimeout(timeoutId);
//   }, [index]);

//   return (
//       <Container 
//         className = "bg-black h-screen text-white flex justify-center items-center"
//         component='div' 
//         disableGutters 
//         maxWidth='xl'>
        
//         <Stack direction="row" gap="2" className="flex flex-col items-center">
//           <Typography 
//             variant="h3"
//             sx={{
//               fontFamily: "var(--font-permanent-marker)"
//             }}
//           >{dartDojoText}</Typography>
          
//           <Box
//             component="span"
//             className="bg-white"
//             sx={{
//               height: 7,
//               width: change,
//               transition: "width 0.5s",
//             }}
//           ></Box>
        
//         </Stack>

//       </Container>
//   );
// }
