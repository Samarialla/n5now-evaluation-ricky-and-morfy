import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function RickyAndMorty() {
   const [movie, setMovie] = useState();
   const { t } = useTranslation();
   const getDataMovie = () => {
      fetch("https://rickandmortyapi.com/api/character")
         .then(res => res.json())
         .then((result) => {
            setMovie(result.results)
         },
            (error) => {
               console.log(error)
            }
         )
   }

   useEffect(() => {
      getDataMovie();

      return () => {
         setMovie();
      }
   }, [])

   return (<>
      <div className='row d-flex justify-content-center'>
         {movie && movie?.map((data, i) => {
            return (<>
               <div key={i} className='col-md-3 row'>
                  <div className='col-md-12'>
                     <img src={data.image} className="img-fluid img--movie" alt="error de imagenes" />
                  </div>
                  <div className='col-md-12'>
                     <p><strong> {t('name')}: </strong>{data.name}</p>
                  </div>
               </div>
            </>)
         })}
      </div>
   </>)
} 