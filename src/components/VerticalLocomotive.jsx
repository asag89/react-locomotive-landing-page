import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import VerticalItem from './VerticalItem';

const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 200px auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h2{
    z-index: 5000;
  }

  .overlay{
    position: absolute;
    margin-top: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    height: 100vh;
    z-index: 11;
  }

  .slider{
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 30vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
      color: #444;
      font-size: 1.6em;
      text-transform: capitalize;
      width: 100%;
      text-align: center;
      border-bottom: 2px solid #000;
    }
  }

  .text1{
    width: 20vw;
    position: absolute;
    top: 50%;
    right: 0;
    padding: 20px !important;
    box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.58);
    border-radius: 20px;
    margin-right: 20px !important;
  }

  .text2{
    width: 20vw;
    position: absolute;
    top: 50%;
    left: 0;
    padding: 20px !important;
    box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.58);
    margin-left: 30px !important;
    border-radius: 20px;
  }


  @media(max-width: 890px) {
    .slider{
      width: 50vw;
    }
    .text1,.text2{
      display: none;
    }
    }

    @media(max-width: 890px) {
      .slider{
        width: 80vw;
      }
    }
`;


const VerticalLocomotive = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom top-=100%',
          scroller: '.App',
          scrub: 1,
          pin: true,
        },
        ease: 'none',
      });

      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },
        {
          y: '-100%',
          scrollTrigger: {
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom+=100 top',
            scroller: '.App',
            scrub: 1,
          },
        },
      );
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Container ref={ref} id="fixed-target" className="verticalLocomotive">
      <div className='overlay' />
      <div className='text1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, nostrum quas voluptatem quidem unde placeat aliquid qui veniam sit ullam?</div>
      <div className='slider' ref={ScrollingRef}>
        <h2>our collaborators</h2>
        <VerticalItem img={"https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403&q=80"} name="Aurora Gill" />
        <VerticalItem img={"https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"} name="Susanne Mills" />
        <VerticalItem img={"https://images.unsplash.com/photo-1605664042212-73d09aa18a96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGJ1c2luZXNzJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"} name="Jacob Cruz" />
        <VerticalItem img={"https://images.unsplash.com/photo-1618085221129-cb9f9ac1e651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} name="Anna Christense" />
      </div>
      <div className='text2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, nostrum quas voluptatem quidem unde placeat aliquid qui veniam sit ullam?</div>
    </Container>
  );
};

export default VerticalLocomotive;
