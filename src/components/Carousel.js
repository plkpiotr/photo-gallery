import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import EmblaCarouselReact from 'embla-carousel-react';
import CarouselButtons from 'components/CarouselButtons';

const Wrapper = styled.div`
  flex: 1;
  min-width: 30vw;
  max-width: 30vw;
  margin: 2vh auto;
  background-color: violet;
`;

const Viewport = styled(EmblaCarouselReact)`
  width: 100%;
  overflow: hidden;
  
  &.is-draggable {
    cursor: grab;
  }
  
  &.is-dragging {
    cursor: grabbing;
  }
`;

const Container = styled.div`
  display: flex;
`;

const Item = styled.div`
  position: relative;
  flex: 0 0 100%;
  background-color: mediumvioletred;
  white-space: nowrap;
  text-align: center;
`;

const Dots = styled.div`
  counter-reset: section;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1vh;
`;

const Carousel = ({children}) => {
  const [carousel, initCarousel] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(index => carousel.scrollTo(index), [carousel]);

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(carousel.selectedScrollSnap());
    };

    if (carousel) {
      setScrollSnaps(carousel.scrollSnapList());
      carousel.on('select', onSelect);
      onSelect();
    }

    return () => carousel && carousel.destroy();
  }, [carousel]);

  return (
    <Wrapper>
      <Viewport
        emblaRef={initCarousel}
        options={{loop: false}}
        htmlTagName="div"
      >
        <Container>
          {children.map((child, index) => (
            <Item key={index}>
              {child}
            </Item>
          ))}
        </Container>
      </Viewport>
      <Dots>
        {scrollSnaps.map((snap, index) => (
          <CarouselButtons
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            key={index}
          />
        ))}
      </Dots>
    </Wrapper>
  );
};

export default Carousel;
