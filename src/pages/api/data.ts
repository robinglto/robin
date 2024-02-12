import { Portafolio } from "./type";

export const design: string = `@keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  .animate-typing {
    overflow: hidden;
    white-space: nowrap;
    animation: typing 1.5s steps(40) 1.5s 1 normal both;
  }

  @keyframes reveal-up {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-reveal-up {
    animation: reveal-up 1s ease-out;
  }

  @keyframes text-focus-in {
    0% {
      opacity: 0;
      filter: blur(12px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  .text-focus-in {
    animation: text-focus-in 0.6s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }`;
