
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import HorizontalItem from "./HorizontalItem";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: auto;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  .slider{
    width: auto;
  position: absolute;
  padding-left: 40px;
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  }

  @media(max-width: 890px) {

    }
`;

const HorizontalLocomotive = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const Horizontalref = useRef(null);

    useLayoutEffect(() => {
        const element = ref.current;

        const scrollingElement = Horizontalref.current;
        const pinWrapWidth = scrollingElement.offsetWidth;
        const t1 = gsap.timeline();

        setTimeout(() => {
            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top+300 top",
                    end: `${pinWrapWidth - 200} bottom`,
                    scroller: ".App",
                    pin: true,
                },
                height: `${scrollingElement.scrollWidth}px`,
                ease: "none",
            });

            t1.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: "top+300 top",
                    end: `${pinWrapWidth} bottom`,
                    scroller: ".App",
                    scrub: 1,
                },
                x: -pinWrapWidth,

                ease: "none",
            });
            ScrollTrigger.refresh();
        }, 1000);
        ScrollTrigger.refresh();

        return () => {
            t1.kill();
            ScrollTrigger.kill();
        };
    }, []);

    return (
        <Section ref={ref} id="horizontalLocomotive">
            <div className="slider" data-scroll ref={Horizontalref}>
                {
                    new Array(7).fill(1).map((_, key) => (
                        <HorizontalItem key={key} img={"https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_1280.png"} />
                    ))
                }
            </div>
        </Section>
    );
};

export default HorizontalLocomotive;
