import styled, { css } from "styled-components";
import { converter } from "../../../../styles/global";

export const SliderWrap = styled.div`
  .swiper {
    width: 100%;
  }

  .swiper-slide {
    background-color: var(--purple-100);
    display: flex;
  }

  ${({ arrows }: any) =>
    arrows &&
    css`
      .swiper-button {
        &-next,
        &-prev {
          top: 50%;
          z-index: 9;
          width: ${converter(40)};
          height: ${converter(40)};
          margin: auto;
          line-height: ${converter(40)};
          position: absolute;
          visibility: hidden;
          text-align: center;
          transform: translateY(-50%);
          color: #000000;
          transition: all 0.4s ease 0s;
          border-radius: 50%;
          background-color: #ffffff;
          box-shadow: 0 ${converter(3)} ${converter(4.5)} rgba(0, 0, 0, 0.06);
          &:hover {
            color: var(--in-blue-color);
            background-color: var(--pink-color);
          }
          &:after {
            font-size: ${converter(14)};
          }
        }
        &-prev {
          outline: 0;
          right: auto;
          left: ${converter(-20)};
          &:after {
            margin-right: ${converter(3)};
          }
        }
        &-next {
          outline: 0;
          left: auto;
          right: ${converter(-20)};
          &:after {
            margin-left: ${converter(3)};
          }
        }
        &-disabled {
          opacity: 0.1;
        }
      }
      &:hover {
        .swiper-button {
          &-prev,
          &-next {
            visibility: visible;
          }
          &-prev {
            left: ${converter(10)};
          }
          &-next {
            right: ${converter(10)};
          }
        }
      }
    `}
  ${({ dots }: { dots: boolean }) =>
    dots &&
    css`
      .swiper-pagination {
        &-horizontal {
          bottom: ${converter(50)};
        }

        &-bullet {
          cursor: pointer;
          width: ${converter(10)};
          height: ${converter(10)};
          display: inline-block;
          border-radius: 50%;
          background: var(--pink-color);
          opacity: 0.2;
          border: ${converter(1)} solid #ff7004;
          margin: 0 ${converter(5)};
          box-shadow: none;
          transition: all 0.4s ease 0s;
          transform: scale(0.8);
          &:hover,
          &-active {
            background-color: var(--pink-color);
            border-color: #ff7004;
            transform: scale(1);
            opacity: 1;
          }
        }
      }
    `};
`;
