import React from "react";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetTestimonialsQuery } from "../../apiSlice";

const TestimonialsSlider = () => {
    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetTestimonialsQuery();

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    let content;

    if (isLoading) {
        content = (
            <Grid container justifyContent="center">
                <CircularProgress />
            </Grid>
        );
    } else if (isSuccess) {
        content = (
            <>
                {todos.length === 0 ? (
                    "You have no todos."
                ) : (
                    <Slider {...settings}>
                        {todos.map((todo, index) => (
                            <div className="" key={index}>
                                <p>{todo.testimonial}</p>
                                <img src={`./img/${todo.img}.png`} alt="" />
                                <p>{todo.author}</p>
                                <p>{todo.title}</p>
                            </div>
                        ))}
                    </Slider>
                )}
            </>
        );
    } else if (isError) {
        content = <Alert severity="error">{error}</Alert>;
    }

    return <>{content}</>;
};

export default TestimonialsSlider;
