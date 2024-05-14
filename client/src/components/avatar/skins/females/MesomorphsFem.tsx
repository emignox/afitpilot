import { IColorSkin } from "../../variablesAvatar/VariableAvatar";

// Balanced Mesomorph
export const getBMSkinFem = (
  colorsSkin: IColorSkin,
  cloth: boolean
): React.SVGProps<SVGGElement> => (
  <g transform="translate(3.901 -12.034)">
    <g
      id="legs1"
      fill={colorsSkin.light}
      fillRule="nonzero"
      transform="matrix(.9544 0 0 1 3.106 0)"
    >
      <g id="leg-left1">
        <path
          id="tibia-left1"
          d="M84.281 261.753h2.186a9.683 9.683 0 019.683 9.683l.001 25.561-.001 18.221 1.938 18.675c0 4.081-3.959 7.389-8.844 7.389h-2.061c-4.885 0-8.844-3.308-8.844-7.389v-27.775c0-1.791-.46-3.552-1.335-5.114a10.462 10.462 0 01-1.336-5.115v-3.82c0-2.051.252-4.094.749-6.084l.018-.072c.509-2.037.767-4.129.767-6.23v-10.851a7.079 7.079 0 017.079-7.079z"
        ></path>
        <path
          id="thigh-left1"
          d="M87.205 193.658h5.579a7.609 7.609 0 017.541 6.608l4.122 31.101v13.497c0 1.751-.146 3.5-.436 5.227l-.947 5.632a27.685 27.685 0 01-3.287 9.189l-2.766 4.823a6.835 6.835 0 00-.905 3.399 6.832 6.832 0 01-6.832 6.832h-4.719a7.321 7.321 0 01-7.32-7.321c0-.88-.159-1.753-.469-2.577l-.992-2.638a22.857 22.857 0 01-1.006-3.497L73.26 256.5l-1.45-9.474a31.623 31.623 0 01-.363-4.771v-32.839c0-8.703 7.055-15.758 15.758-15.758z"
        ></path>
        <g id="foot-left1">
          <path d="M84.906 326.02h8.305c4.788 0 8.67 3.416 8.67 7.63 0 4.215-3.882 7.631-8.67 7.631h-8.305c-4.788 0-8.67-3.416-8.67-7.631 0-4.214 3.882-7.63 8.67-7.63z"></path>
          <path d="M79.107 329.161H99.01c1.585 0 2.871 1.641 2.871 3.664v4.792c0 2.024-1.286 3.664-2.871 3.664H79.107c-1.585 0-2.871-1.64-2.871-3.664v-4.792c0-2.023 1.286-3.664 2.871-3.664z"></path>
        </g>
      </g>
      <g id="leg-right1">
        <path
          id="tibia-right1"
          d="M53.19 261.752h-2.186c-5.348 0-9.684 4.335-9.684 9.683v43.782l-1.937 18.675c0 4.081 3.959 7.389 8.843 7.389h2.062c4.884 0 8.844-3.308 8.844-7.389v-27.775c0-1.791.459-3.552 1.335-5.114a10.46 10.46 0 001.335-5.115v-3.82c0-2.051-.251-4.094-.748-6.084l-.018-.072a25.648 25.648 0 01-.767-6.23v-10.851a7.08 7.08 0 00-7.079-7.079z"
        ></path>
        <path
          id="thigh-right1"
          d="M51.643 193.657h-8.675a5.705 5.705 0 00-5.704 5.705l-4.242 32.004v13.497c0 1.751.145 3.5.436 5.227l.946 5.632a27.709 27.709 0 003.288 9.189l2.766 4.823a6.838 6.838 0 01.905 3.399 6.832 6.832 0 006.832 6.832h4.719a7.32 7.32 0 007.32-7.32c0-.881.158-1.754.468-2.578l.993-2.638a22.857 22.857 0 001.006-3.497l1.507-7.433 1.451-9.474c.241-1.579.363-3.174.363-4.771v-34.218c0-7.941-6.438-14.379-14.379-14.379z"
        ></path>
        <g id="foot-right1">
          <path d="M52.564 326.019H44.26c-4.788 0-8.67 3.416-8.67 7.63 0 4.215 3.882 7.631 8.67 7.631h8.304c4.789 0 8.67-3.416 8.67-7.631 0-4.214-3.881-7.63-8.67-7.63z"></path>
          <path d="M58.363 329.16H38.461c-1.586 0-2.871 1.641-2.871 3.664v4.792c0 2.024 1.285 3.664 2.871 3.664h19.902c1.586 0 2.871-1.64 2.871-3.664v-4.792c0-2.023-1.285-3.664-2.871-3.664z"></path>
        </g>
      </g>
    </g>
    <path
      id="deltoids1"
      fill={colorsSkin.light}
      fillOpacity="0.99"
      fillRule="nonzero"
      d="M67.966 106.844c1.352 0 2.699.074 4.034.218 16.102 1.737 30.453 13.632 30.453 28.139l-2.528 15.532-4.932 26.739c0 15.71-9.369 18.028-27.027 18.028s-25.924-2.318-25.924-18.028l-5.95-26.739v-15.532c0-15.71 14.216-28.357 31.874-28.357z"
      transform="matrix(.89745 0 0 1 6.984 0)"
    ></path>
    <path
      id="trunk1"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M67.925 170.441h1.023c16.943 0 22.442-8.764 25.223 3.114l5.36 23.836c2.778 11.868-13.64 21.717-30.583 21.717h-1.023c-16.943 0-33.361-9.849-30.583-21.717l5.924-23.836c2.781-11.878 7.716-3.114 24.659-3.114z"
      transform="matrix(.9544 0 0 1 3.106 0)"
    ></path>
    <path
      id="abs-back1"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M67.891 159.689c12.211 0 22.043 13.218 22.043 29.636H45.848c0-16.418 9.831-29.636 22.043-29.636z"
      transform="matrix(.9544 0 0 1 3.106 0)"
    ></path>
    <g id="arms1" fillRule="nonzero" transform="matrix(.9544 0 0 1 3.106 0)">
      <g id="arm-right1">
        <path
          id="bicep-right1"
          fill={colorsSkin.light}
          d="M29.735 123.095c-5.175-1.001-11.405 1.097-12.545 6.992l-3.54 10.645a25 25 0 00-1.17 10.188l.954 10.32c.217 2.354-.047 4.727-.015 7.091.057 4.141 1.945 7.178 6.027 7.967 4.458.863 7.419-1.357 8.882-5.756.497-1.493.885-3.026 1.468-4.488l2.648-6.636a25.003 25.003 0 001.68-11.508l-.547-6.07c-.142-1.58-.125-3.167-.054-4.751.195-4.355.106-13.241-3.788-13.994z"
        ></path>
        <path
          id="forearm-right1"
          fill={colorsSkin.light}
          d="M21.633 156.787l-.066-.002c-4.242-.131-7.92 4.578-8.216 10.517l-2.222 44.6c-.296 5.94 2.902 10.861 7.144 10.992l.066.002c4.242.131 7.92-4.578 8.216-10.518l2.222-44.6c.296-5.94-2.902-10.861-7.144-10.991z"
        ></path>
        <g id="hand-right1" fill={colorsSkin.light}>
          <path d="M21.541 202.739l-2.666-.015c-5.109-.027-9.491 5.517-9.789 12.383l-.264 6.1c-.298 6.866 3.602 12.454 8.711 12.481l2.665.015c5.109.027 9.491-5.517 9.789-12.383l.265-6.1c.297-6.866-3.603-12.454-8.711-12.481z"></path>
          <path d="M22.199 220.089c-1.111-4.367-5.03-6.578-8.752-4.939-3.722 1.639-5.839 6.508-4.728 10.874l3.036 11.926c1.111 4.366 5.03 6.577 8.752 4.938 3.723-1.639 5.839-6.507 4.728-10.874l-3.036-11.925z"></path>
        </g>
        <path
          id="thumb-right1"
          fill={colorsSkin.strong}
          d="M30.913 217.757c.125-3.044-1.581-5.522-3.812-5.536-2.23-.014-4.14 2.443-4.266 5.487l-.343 8.313c-.126 3.044 1.581 5.523 3.812 5.537 2.23.013 4.14-2.443 4.266-5.487l.343-8.314z"
        ></path>
      </g>
      <g id="arm-left1">
        <path
          id="bicep-left1"
          fill={colorsSkin.light}
          d="M106.462 123.095c5.175-1.001 11.406 1.097 12.546 6.992l3.539 10.645a25 25 0 011.171 10.188l-.954 10.32c-.218 2.354.046 4.727.014 7.091-.057 4.141-1.945 7.178-6.027 7.967-4.457.863-7.418-1.357-8.882-5.756-.497-1.493-.884-3.026-1.467-4.488l-2.649-6.636a25.003 25.003 0 01-1.68-11.508l.547-6.07c.142-1.58.126-3.167.055-4.751-.195-4.355-.107-13.241 3.787-13.994z"
        ></path>
        <path
          id="forearm-left1"
          fill={colorsSkin.light}
          d="M114.564 156.787l.067-.002c4.241-.131 7.919 4.578 8.215 10.517l2.223 44.6c.295 5.94-2.903 10.861-7.145 10.992l-.066.002c-4.241.131-7.92-4.578-8.216-10.518l-2.222-44.6c-.296-5.94 2.903-10.861 7.144-10.991z"
        ></path>
        <g id="hand-left1" fill={colorsSkin.light}>
          <path d="M114.657 202.739l2.665-.015c5.109-.027 9.492 5.517 9.789 12.383l.265 6.1c.297 6.866-3.603 12.454-8.711 12.481l-2.666.015c-5.109.027-9.491-5.517-9.789-12.383l-.264-6.1c-.298-6.866 3.602-12.454 8.711-12.481z"></path>
          <path d="M113.998 220.089c1.111-4.367 5.03-6.578 8.752-4.939 3.723 1.639 5.839 6.508 4.728 10.874l-3.036 11.926c-1.111 4.366-5.03 6.577-8.752 4.938-3.722-1.639-5.839-6.507-4.728-10.874l3.036-11.925z"></path>
        </g>
        <path
          id="thumb-left1"
          fill={colorsSkin.strong}
          d="M105.284 217.757c-.125-3.044 1.581-5.522 3.812-5.536 2.231-.014 4.141 2.443 4.266 5.487l.343 8.313c.126 3.044-1.581 5.523-3.811 5.537-2.231.013-4.141-2.443-4.267-5.487l-.343-8.314z"
        ></path>
      </g>
    </g>
    <path
      id="shoulders1"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M29.534 115.593h77.272c7.658 0 13.823 5.745 13.823 12.882s-6.165 12.882-13.823 12.882H29.534c-7.658 0-13.823-5.745-13.823-12.882s6.165-12.882 13.823-12.882z"
      transform="matrix(.9544 0 0 1 3.106 0)"
    ></path>
    <path
      id="bust1"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M56.05 114.065h24.095c13.464 0 24.302 9.892 24.302 22.18 0 12.287-10.838 22.179-24.302 22.179H56.05c-13.463 0-24.302-9.892-24.302-22.179 0-12.288 10.839-22.18 24.302-22.18z"
      transform="matrix(.9544 0 0 1 3.106 0)"
    ></path>
    <path
      id="breasts-back1"
      fill={colorsSkin.strong}
      fillOpacity="0.99"
      fillRule="nonzero"
      d="M68.738 141.357a5.648 5.648 0 015.659 5.66v5.249a5.647 5.647 0 01-5.659 5.66 5.647 5.647 0 01-5.66-5.66v-5.249a5.648 5.648 0 015.66-5.66z"
      transform="matrix(.9544 0 0 1 3.106 0)"
    ></path>
    <path
      id="breasts1"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M54.444 135.418a8.105 8.105 0 00-4.042 1.053c-3.843.216-7.446 1.666-10.078 4.055-2.632 2.389-4.097 5.539-4.097 8.812 0 3.42 1.599 6.701 4.446 9.119 2.846 2.419 6.707 3.777 10.733 3.777 3.667-.003 7.208-1.135 9.97-3.185 2.761-2.05 4.556-4.88 5.052-7.968a5.59 5.59 0 00.157-1.312v-8.015c0-3.51-3.262-6.336-7.313-6.336h-4.828zm22.482 0c-4.05 0-7.312 2.826-7.312 6.336v8.015c0 .45.055.889.157 1.312.496 3.088 2.291 5.918 5.052 7.968 2.761 2.05 6.303 3.182 9.97 3.185 4.026 0 7.886-1.358 10.733-3.777 2.846-2.418 4.446-5.699 4.446-9.119-.001-3.273-1.465-6.423-4.098-8.812-2.632-2.389-6.234-3.839-10.077-4.055a8.106 8.106 0 00-4.043-1.053h-4.828z"
      transform="matrix(.9544 0 0 1 3.106 0)"
    ></path>
    <g id="abs1" fill={colorsSkin.strong} fillRule="nonzero">
      <path
        d="M63.269 164.597H59.5c-1.722 0-3.117 1.027-3.117 2.293v2.656c0 1.267 1.395 2.294 3.117 2.294h3.769c1.721 0 3.117-1.027 3.117-2.294v-2.656c0-1.266-1.396-2.293-3.117-2.293zM63.27 172.62h-5.741c-1.722 0-3.117 1.027-3.117 2.294v2.655c0 1.267 1.395 2.294 3.117 2.294h5.741c1.722 0 3.117-1.027 3.117-2.294v-2.655c0-1.267-1.395-2.294-3.117-2.294zM63.27 180.475h-5.741c-1.722 0-3.117 1.026-3.117 2.293v2.656c0 1.267 1.395 2.294 3.117 2.294h5.741c1.722 0 3.117-1.027 3.117-2.294v-2.656c0-1.267-1.395-2.293-3.117-2.293zM72.495 164.597h3.769c1.721 0 3.117 1.027 3.117 2.293v2.656c0 1.267-1.396 2.294-3.117 2.294h-3.769c-1.722 0-3.117-1.027-3.117-2.294v-2.656c0-1.266 1.395-2.293 3.117-2.293zM72.493 172.62h5.742c1.721 0 3.117 1.027 3.117 2.294v2.655c0 1.267-1.396 2.294-3.117 2.294h-5.742c-1.721 0-3.117-1.027-3.117-2.294v-2.655c0-1.267 1.396-2.294 3.117-2.294zM72.493 180.475h5.742c1.721 0 3.117 1.026 3.117 2.293v2.656c0 1.267-1.396 2.294-3.117 2.294h-5.742c-1.721 0-3.117-1.027-3.117-2.294v-2.656c0-1.267 1.396-2.293 3.117-2.293z"
        transform="matrix(.9544 0 0 1 3.106 0)"
      ></path>
    </g>
    <g id="underwear1" fillRule="nonzero">
      <path
        fill="#4F4F4F"
        d="M39.176 189.945c1.616 22.732 14.029 40.327 28.92 40.327 15.086 0 28.383-17.167 29.742-40.327H39.176z"
        transform="matrix(.9544 0 0 1 3.106 0)"
      ></path>
      <path
        fill="#4B4B4B"
        d="M97.865 189.941L69.117 194.4l-.242 35.777 2.698 15.679h32.945c.202-29.005-.135-38.803-6.653-55.915zM39.192 189.909l29.429 4.475v35.79l-2.745 15.679H33.007c-.209-29.102-.523-38.776 6.185-55.944z"
        transform="matrix(.9544 0 0 1 3.106 0)"
      ></path>
    </g>
    {!cloth && (
      <g id="topwear">
        <path
          fill="#4F4F4F"
          fillRule="nonzero"
          d="M56.05 114.065h24.095c13.464 0 24.302 9.892 24.302 22.18 0 12.287-2.246 25.502-24.302 22.179H56.05c-23.959 2.29-24.302-9.892-24.302-22.179 0-12.288 10.839-22.18 24.302-22.18z"
          transform="matrix(.9544 0 0 1.12567 3.106 -14.334)"
        ></path>
        <path
          fill="#4F4F4F"
          fillOpacity="0.99"
          fillRule="nonzero"
          d="M67.966 106.844c1.352 0 2.699.074 4.034.218 16.102 1.737 30.453 13.632 30.453 28.139l-2.528 15.532H36.092v-15.532c0-15.71 14.216-28.357 31.874-28.357z"
          transform="matrix(.89745 0 0 1 6.984 0)"
        ></path>
      </g>
    )}
  </g>
);

// Endomorphic Mesomorph
export const getEnMSkinFem = (
  colorsSkin: IColorSkin,
  cloth: boolean
): React.SVGProps<SVGGElement> => (
  <g transform="translate(3.902 -12.034)">
    <g
      id="legs"
      fill={colorsSkin.light}
      fillRule="nonzero"
      transform="matrix(1.03227 0 0 1 -2.198 0)"
    >
      <g id="leg-left">
        <path
          id="tibia-left"
          d="M84.281 261.753h2.186a9.683 9.683 0 019.683 9.683l.001 25.561-.001 18.221 1.938 18.675c0 4.081-3.959 7.389-8.844 7.389h-2.061c-4.885 0-8.844-3.308-8.844-7.389v-27.775c0-1.791-.46-3.552-1.335-5.114a10.462 10.462 0 01-1.336-5.115v-3.82c0-2.051.252-4.094.749-6.084l.018-.072c.509-2.037.767-4.129.767-6.23v-10.851a7.079 7.079 0 017.079-7.079z"
        ></path>
        <path
          id="thigh-left"
          d="M87.205 193.658h5.579a7.609 7.609 0 017.541 6.608l4.122 31.101v13.497c0 1.751-.146 3.5-.436 5.227l-.947 5.632a27.685 27.685 0 01-3.287 9.189l-2.766 4.823a6.835 6.835 0 00-.905 3.399 6.832 6.832 0 01-6.832 6.832h-4.719a7.321 7.321 0 01-7.32-7.321c0-.88-.159-1.753-.469-2.577l-.992-2.638a22.857 22.857 0 01-1.006-3.497L73.26 256.5l-1.45-9.474a31.623 31.623 0 01-.363-4.771v-32.839c0-8.703 7.055-15.758 15.758-15.758z"
        ></path>
        <g id="foot-left">
          <path d="M84.906 326.02h8.305c4.788 0 8.67 3.416 8.67 7.63 0 4.215-3.882 7.631-8.67 7.631h-8.305c-4.788 0-8.67-3.416-8.67-7.631 0-4.214 3.882-7.63 8.67-7.63z"></path>
          <path d="M79.107 329.161H99.01c1.585 0 2.871 1.641 2.871 3.664v4.792c0 2.024-1.286 3.664-2.871 3.664H79.107c-1.585 0-2.871-1.64-2.871-3.664v-4.792c0-2.023 1.286-3.664 2.871-3.664z"></path>
        </g>
      </g>
      <g id="leg-right">
        <path
          id="tibia-right"
          d="M53.19 261.752h-2.186c-5.348 0-9.684 4.335-9.684 9.683v43.782l-1.937 18.675c0 4.081 3.959 7.389 8.843 7.389h2.062c4.884 0 8.844-3.308 8.844-7.389v-27.775c0-1.791.459-3.552 1.335-5.114a10.46 10.46 0 001.335-5.115v-3.82c0-2.051-.251-4.094-.748-6.084l-.018-.072a25.648 25.648 0 01-.767-6.23v-10.851a7.08 7.08 0 00-7.079-7.079z"
        ></path>
        <path
          id="thigh-right"
          d="M51.643 193.657h-8.675a5.705 5.705 0 00-5.704 5.705l-4.242 32.004v13.497c0 1.751.145 3.5.436 5.227l.946 5.632a27.709 27.709 0 003.288 9.189l2.766 4.823a6.838 6.838 0 01.905 3.399 6.832 6.832 0 006.832 6.832h4.719a7.32 7.32 0 007.32-7.32c0-.881.158-1.754.468-2.578l.993-2.638a22.857 22.857 0 001.006-3.497l1.507-7.433 1.451-9.474c.241-1.579.363-3.174.363-4.771v-34.218c0-7.941-6.438-14.379-14.379-14.379z"
        ></path>
        <g id="foot-right">
          <path d="M52.564 326.019H44.26c-4.788 0-8.67 3.416-8.67 7.63 0 4.215 3.882 7.631 8.67 7.631h8.304c4.789 0 8.67-3.416 8.67-7.631 0-4.214-3.881-7.63-8.67-7.63z"></path>
          <path d="M58.363 329.16H38.461c-1.586 0-2.871 1.641-2.871 3.664v4.792c0 2.024 1.285 3.664 2.871 3.664h19.902c1.586 0 2.871-1.64 2.871-3.664v-4.792c0-2.023-1.285-3.664-2.871-3.664z"></path>
        </g>
      </g>
    </g>
    <path
      id="deltoids"
      fill={colorsSkin.light}
      fillOpacity="0.99"
      fillRule="nonzero"
      d="M67.966 106.844c1.352 0 2.699.074 4.034.218 16.102 1.737 30.453 13.632 30.453 28.139l-2.528 15.532-4.932 26.739c0 15.71-9.369 18.028-27.027 18.028s-25.924-2.318-25.924-18.028l-5.95-26.739v-15.532c0-15.71 14.216-28.357 31.874-28.357z"
      transform="matrix(.97068 0 0 1 1.997 0)"
    ></path>
    <path
      id="trunk"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M67.925 170.441h1.023c16.943 0 22.442-8.764 25.223 3.114l5.36 23.836c2.778 11.868-13.64 21.717-30.583 21.717h-1.023c-16.943 0-33.361-9.849-30.583-21.717l5.924-23.836c2.781-11.878 7.716-3.114 24.659-3.114z"
      transform="matrix(1.03227 0 0 1 -2.198 0)"
    ></path>
    <path
      id="abs-back"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M67.891 159.689c12.211 0 22.043 13.218 22.043 29.636H45.848c0-16.418 9.831-29.636 22.043-29.636z"
      transform="matrix(1.03227 0 0 1 -2.198 0)"
    ></path>
    <g id="arms" fillRule="nonzero" transform="matrix(1.03227 0 0 1 -2.198 0)">
      <g id="arm-right">
        <path
          id="bicep-right"
          fill={colorsSkin.light}
          d="M29.735 123.095c-5.175-1.001-11.405 1.097-12.545 6.992l-3.54 10.645a25 25 0 00-1.17 10.188l.954 10.32c.217 2.354-.047 4.727-.015 7.091.057 4.141 1.945 7.178 6.027 7.967 4.458.863 7.419-1.357 8.882-5.756.497-1.493.885-3.026 1.468-4.488l2.648-6.636a25.003 25.003 0 001.68-11.508l-.547-6.07c-.142-1.58-.125-3.167-.054-4.751.195-4.355.106-13.241-3.788-13.994z"
        ></path>
        <path
          id="forearm-right"
          fill={colorsSkin.light}
          d="M21.633 156.787l-.066-.002c-4.242-.131-7.92 4.578-8.216 10.517l-2.222 44.6c-.296 5.94 2.902 10.861 7.144 10.992l.066.002c4.242.131 7.92-4.578 8.216-10.518l2.222-44.6c.296-5.94-2.902-10.861-7.144-10.991z"
        ></path>
        <g id="hand-right" fill={colorsSkin.light}>
          <path d="M21.541 202.739l-2.666-.015c-5.109-.027-9.491 5.517-9.789 12.383l-.264 6.1c-.298 6.866 3.602 12.454 8.711 12.481l2.665.015c5.109.027 9.491-5.517 9.789-12.383l.265-6.1c.297-6.866-3.603-12.454-8.711-12.481z"></path>
          <path d="M22.199 220.089c-1.111-4.367-5.03-6.578-8.752-4.939-3.722 1.639-5.839 6.508-4.728 10.874l3.036 11.926c1.111 4.366 5.03 6.577 8.752 4.938 3.723-1.639 5.839-6.507 4.728-10.874l-3.036-11.925z"></path>
        </g>
        <path
          id="thumb-right"
          fill={colorsSkin.strong}
          d="M30.913 217.757c.125-3.044-1.581-5.522-3.812-5.536-2.23-.014-4.14 2.443-4.266 5.487l-.343 8.313c-.126 3.044 1.581 5.523 3.812 5.537 2.23.013 4.14-2.443 4.266-5.487l.343-8.314z"
        ></path>
      </g>
      <g id="arm-left">
        <path
          id="bicep-left"
          fill={colorsSkin.light}
          d="M106.462 123.095c5.175-1.001 11.406 1.097 12.546 6.992l3.539 10.645a25 25 0 011.171 10.188l-.954 10.32c-.218 2.354.046 4.727.014 7.091-.057 4.141-1.945 7.178-6.027 7.967-4.457.863-7.418-1.357-8.882-5.756-.497-1.493-.884-3.026-1.467-4.488l-2.649-6.636a25.003 25.003 0 01-1.68-11.508l.547-6.07c.142-1.58.126-3.167.055-4.751-.195-4.355-.107-13.241 3.787-13.994z"
        ></path>
        <path
          id="forearm-left"
          fill={colorsSkin.light}
          d="M114.564 156.787l.067-.002c4.241-.131 7.919 4.578 8.215 10.517l2.223 44.6c.295 5.94-2.903 10.861-7.145 10.992l-.066.002c-4.241.131-7.92-4.578-8.216-10.518l-2.222-44.6c-.296-5.94 2.903-10.861 7.144-10.991z"
        ></path>
        <g id="hand-left" fill={colorsSkin.light}>
          <path d="M114.657 202.739l2.665-.015c5.109-.027 9.492 5.517 9.789 12.383l.265 6.1c.297 6.866-3.603 12.454-8.711 12.481l-2.666.015c-5.109.027-9.491-5.517-9.789-12.383l-.264-6.1c-.298-6.866 3.602-12.454 8.711-12.481z"></path>
          <path d="M113.998 220.089c1.111-4.367 5.03-6.578 8.752-4.939 3.723 1.639 5.839 6.508 4.728 10.874l-3.036 11.926c-1.111 4.366-5.03 6.577-8.752 4.938-3.722-1.639-5.839-6.507-4.728-10.874l3.036-11.925z"></path>
        </g>
        <path
          id="thumb-left"
          fill={colorsSkin.strong}
          d="M105.284 217.757c-.125-3.044 1.581-5.522 3.812-5.536 2.231-.014 4.141 2.443 4.266 5.487l.343 8.313c.126 3.044-1.581 5.523-3.811 5.537-2.231.013-4.141-2.443-4.267-5.487l-.343-8.314z"
        ></path>
      </g>
    </g>
    <path
      id="shoulders"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M29.534 115.593h77.272c7.658 0 13.823 5.745 13.823 12.882s-6.165 12.882-13.823 12.882H29.534c-7.658 0-13.823-5.745-13.823-12.882s6.165-12.882 13.823-12.882z"
      transform="matrix(1.03227 0 0 1 -2.198 0)"
    ></path>
    <path
      id="bust"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M56.05 114.065h24.095c13.464 0 24.302 9.892 24.302 22.18 0 12.287-10.838 22.179-24.302 22.179H56.05c-13.463 0-24.302-9.892-24.302-22.179 0-12.288 10.839-22.18 24.302-22.18z"
      transform="matrix(1.03227 0 0 1 -2.198 0)"
    ></path>
    <path
      id="breasts-back"
      fill={colorsSkin.strong}
      fillOpacity="0.99"
      fillRule="nonzero"
      d="M68.738 141.357a5.648 5.648 0 015.659 5.66v5.249a5.647 5.647 0 01-5.659 5.66 5.647 5.647 0 01-5.66-5.66v-5.249a5.648 5.648 0 015.66-5.66z"
      transform="matrix(1.03227 0 0 1 -2.198 0)"
    ></path>
    <path
      id="breasts"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M54.444 135.418a8.105 8.105 0 00-4.042 1.053c-3.843.216-7.446 1.666-10.078 4.055-2.632 2.389-4.097 5.539-4.097 8.812 0 3.42 1.599 6.701 4.446 9.119 2.846 2.419 6.707 3.777 10.733 3.777 3.667-.003 7.208-1.135 9.97-3.185 2.761-2.05 4.556-4.88 5.052-7.968a5.59 5.59 0 00.157-1.312v-8.015c0-3.51-3.262-6.336-7.313-6.336h-4.828zm22.482 0c-4.05 0-7.312 2.826-7.312 6.336v8.015c0 .45.055.889.157 1.312.496 3.088 2.291 5.918 5.052 7.968 2.761 2.05 6.303 3.182 9.97 3.185 4.026 0 7.886-1.358 10.733-3.777 2.846-2.418 4.446-5.699 4.446-9.119-.001-3.273-1.465-6.423-4.098-8.812-2.632-2.389-6.234-3.839-10.077-4.055a8.106 8.106 0 00-4.043-1.053h-4.828z"
      transform="matrix(1.03227 0 0 1 -2.198 0)"
    ></path>
    <g id="abs" fill={colorsSkin.strong} fillRule="nonzero">
      <path
        d="M63.269 164.597H59.5c-1.722 0-3.117 1.027-3.117 2.293v2.656c0 1.267 1.395 2.294 3.117 2.294h3.769c1.721 0 3.117-1.027 3.117-2.294v-2.656c0-1.266-1.396-2.293-3.117-2.293zM63.27 172.62h-5.741c-1.722 0-3.117 1.027-3.117 2.294v2.655c0 1.267 1.395 2.294 3.117 2.294h5.741c1.722 0 3.117-1.027 3.117-2.294v-2.655c0-1.267-1.395-2.294-3.117-2.294zM63.27 180.475h-5.741c-1.722 0-3.117 1.026-3.117 2.293v2.656c0 1.267 1.395 2.294 3.117 2.294h5.741c1.722 0 3.117-1.027 3.117-2.294v-2.656c0-1.267-1.395-2.293-3.117-2.293zM72.495 164.597h3.769c1.721 0 3.117 1.027 3.117 2.293v2.656c0 1.267-1.396 2.294-3.117 2.294h-3.769c-1.722 0-3.117-1.027-3.117-2.294v-2.656c0-1.266 1.395-2.293 3.117-2.293zM72.493 172.62h5.742c1.721 0 3.117 1.027 3.117 2.294v2.655c0 1.267-1.396 2.294-3.117 2.294h-5.742c-1.721 0-3.117-1.027-3.117-2.294v-2.655c0-1.267 1.396-2.294 3.117-2.294zM72.493 180.475h5.742c1.721 0 3.117 1.026 3.117 2.293v2.656c0 1.267-1.396 2.294-3.117 2.294h-5.742c-1.721 0-3.117-1.027-3.117-2.294v-2.656c0-1.267 1.396-2.293 3.117-2.293z"
        transform="matrix(1.03227 0 0 1 -2.198 0)"
      ></path>
    </g>
    <g id="underwear" fillRule="nonzero">
      <path
        fill="#4F4F4F"
        d="M39.176 189.945c1.616 22.732 14.029 40.327 28.92 40.327 15.086 0 28.383-17.167 29.742-40.327H39.176z"
        transform="matrix(1.03227 0 0 1 -2.198 0)"
      ></path>
      <path
        fill="#4B4B4B"
        d="M97.865 189.941L69.117 194.4l-.242 35.777 2.698 15.679h32.945c.202-29.005-.135-38.803-6.653-55.915zM39.192 189.909l29.429 4.475v35.79l-2.745 15.679H33.007c-.209-29.102-.523-38.776 6.185-55.944z"
        transform="matrix(1.03227 0 0 1 -2.198 0)"
      ></path>
    </g>
    {!cloth && (
      <g id="topwear">
        <path
          fill="#4F4F4F"
          fillRule="nonzero"
          d="M56.05 114.065h24.095c13.464 0 24.302 9.892 24.302 22.18 0 9.941-2.077 24.927-14.059 26.955-2.828.479-6.208.236-10.243-.966H56.05c-23.044 6.114-24.302-13.702-24.302-25.989 0-12.288 10.839-22.18 24.302-22.18z"
          transform="matrix(1.03227 0 0 1 -2.198 0)"
        ></path>
        <path
          fill="#4F4F4F"
          fillOpacity="0.99"
          fillRule="nonzero"
          d="M67.966 106.844c1.352 0 2.699.074 4.034.218 16.102 1.737 30.453 13.632 30.453 28.139l-2.528 15.532-19.197.439c4.878-14.193-30.287-11.931-34.796 0l-9.84-.439v-15.532c0-15.71 14.216-28.357 31.874-28.357z"
          transform="matrix(.97068 0 0 1 1.997 0)"
        ></path>
      </g>
    )}
  </g>
);

// Ectomorphic Mesomorph
export const getEcMSkinFem = (
  colorsSkin: IColorSkin,
  cloth: boolean
): React.SVGProps<SVGGElement> => (
  <g transform="translate(-94.529 -9.518) scale(.97017)">
    <g id="legs" fill={colorsSkin.light} fillRule="nonzero">
      <g id="leg-left">
        <path
          id="tibia-left"
          d="M186.328 267.875h1.983c4.851 0 8.783 4.436 8.783 9.91v44.806l1.757 19.111c0 4.177-3.591 7.562-8.021 7.562h-1.87c-4.431 0-8.022-3.385-8.022-7.562v-28.424c0-1.833-.417-3.635-1.211-5.234a11.8 11.8 0 01-1.211-5.234v-3.91c0-2.099.228-4.19.679-6.226l.016-.074a29.48 29.48 0 00.696-6.376V275.12c0-.422.033-.842.097-1.256.541-3.464 3.207-5.989 6.324-5.989z"
        ></path>
        <path
          id="thigh-left"
          d="M188.981 198.188h5.06c2.847 0 5.402 1.974 6.433 4.968.198.577.334 1.18.407 1.794l3.739 31.829v13.812a36.38 36.38 0 01-.396 5.35l-.859 5.763a30.752 30.752 0 01-2.981 9.404l-2.509 4.936a7.7 7.7 0 00-.821 3.479c0 3.861-2.774 6.991-6.197 6.991h-4.28c-3.666 0-6.64-3.354-6.64-7.492 0-.9-.144-1.794-.425-2.637l-.9-2.7a25.672 25.672 0 01-.912-3.579l-1.368-7.607-1.315-9.695a36.368 36.368 0 01-.329-4.883v-33.607c0-8.906 6.399-16.126 14.293-16.126z"
        ></path>
        <g id="foot-left">
          <path d="M186.895 333.646h7.533c4.343 0 7.864 3.495 7.864 7.808 0 4.314-3.521 7.81-7.864 7.81h-7.533c-4.343 0-7.864-3.496-7.864-7.81 0-4.313 3.521-7.808 7.864-7.808z"></path>
          <path d="M181.635 336.86h18.053c1.438 0 2.604 1.68 2.604 3.75v4.904c0 2.071-1.166 3.75-2.604 3.75h-18.053c-1.437 0-2.604-1.679-2.604-3.75v-4.904c0-2.07 1.167-3.75 2.604-3.75z"></path>
        </g>
      </g>
      <g id="leg-right">
        <path
          id="tibia-right"
          d="M158.127 267.874h-1.983c-4.851 0-8.784 4.436-8.784 9.91v44.806l-1.756 19.111c0 4.177 3.59 7.562 8.02 7.562h1.871c4.43 0 8.022-3.385 8.022-7.562v-28.424c0-1.833.416-3.635 1.21-5.234a11.787 11.787 0 001.211-5.234v-3.91c0-2.099-.227-4.19-.678-6.226l-.016-.074a29.424 29.424 0 01-.696-6.376v-11.104c0-.422-.033-.842-.097-1.256-.541-3.463-3.207-5.989-6.324-5.989z"
        ></path>
        <path
          id="thigh-right"
          d="M156.724 198.187h-7.869c-2.857 0-5.173 2.613-5.173 5.838l-3.848 32.753v13.812c0 1.792.132 3.582.395 5.35l.859 5.763a30.754 30.754 0 002.982 9.404l2.509 4.936a7.702 7.702 0 01.821 3.479c0 3.861 2.774 6.991 6.196 6.991h4.281c3.666 0 6.639-3.354 6.639-7.491 0-.901.144-1.795.425-2.638l.9-2.7c.389-1.163.693-2.361.913-3.579l1.367-7.606 1.316-9.696c.219-1.616.329-3.248.329-4.883v-35.018c0-8.127-5.839-14.715-13.042-14.715z"
        ></path>
        <g id="foot-right">
          <path d="M157.56 333.645h-7.532c-4.343 0-7.864 3.495-7.864 7.808 0 4.314 3.521 7.809 7.864 7.809h7.532c4.344 0 7.864-3.495 7.864-7.809 0-4.313-3.52-7.808-7.864-7.808z"></path>
          <path d="M162.82 336.859h-18.052c-1.438 0-2.604 1.68-2.604 3.75v4.904c0 2.072 1.166 3.75 2.604 3.75h18.052c1.439 0 2.604-1.678 2.604-3.75v-4.904c0-2.07-1.165-3.75-2.604-3.75z"></path>
        </g>
      </g>
    </g>
    <path
      id="deltoids"
      fill={colorsSkin.light}
      fillOpacity="0.99"
      fillRule="nonzero"
      d="M171.53 109.344c1.226 0 2.448.075 3.659.223 14.605 1.777 27.622 13.951 27.622 28.797l-2.293 15.895-4.473 27.365c0 16.077-8.498 18.45-24.515 18.45-16.016 0-23.514-2.373-23.514-18.45l-5.397-27.365v-15.895c0-16.077 12.895-29.02 28.911-29.02z"
    ></path>
    <path
      id="trunk"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M171.493 174.428h.928c15.368 0 20.355-8.969 22.878 3.187l4.862 24.393c2.519 12.146-12.372 22.225-27.74 22.225h-.928c-15.368 0-30.26-10.079-27.74-22.225l5.373-24.393c2.523-12.156 6.999-3.187 22.367-3.187z"
    ></path>
    <path
      id="abs-back"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M171.463 163.425c11.075 0 19.993 13.527 19.993 30.329h-39.987c0-16.802 8.917-30.329 19.994-30.329z"
    ></path>
    <g id="arms" fillRule="nonzero">
      <g id="arm-right">
        <path
          fill={colorsSkin.light}
          d="M136.853 125.975c-4.694-1.025-10.345 1.122-11.379 7.155l-3.211 10.894a28.665 28.665 0 00-1.061 10.427l.865 10.561c.197 2.409-.043 4.838-.014 7.257.052 4.238 1.765 7.346 5.467 8.153 4.044.883 6.73-1.388 8.057-5.89.45-1.528.802-3.097 1.331-4.593l2.402-6.792a28.606 28.606 0 001.524-11.777l-.496-6.212c-.129-1.617-.114-3.241-.049-4.862.176-4.457.096-13.551-3.436-14.321z"
        ></path>
        <path
          fill={colorsSkin.light}
          d="M129.504 160.455l-.06-.002c-3.848-.134-7.184 4.685-7.452 10.763l-2.016 45.643c-.268 6.079 2.632 11.115 6.48 11.249l.06.002c3.848.134 7.184-4.685 7.452-10.764l2.016-45.643c.268-6.079-2.633-11.115-6.48-11.248z"
        ></path>
        <g id="hand-right">
          <path
            fill={colorsSkin.light}
            d="M129.42 207.481l-2.418-.015c-4.634-.028-8.609 5.646-8.879 12.673l-.239 6.242c-.271 7.027 3.267 12.746 7.901 12.773l2.417.016c4.634.027 8.609-5.646 8.879-12.673l.24-6.243c.27-7.026-3.268-12.745-7.901-12.773z"
          ></path>
          <path
            fill={colorsSkin.light}
            d="M130.017 225.237c-1.008-4.469-4.563-6.732-7.939-5.055-3.376 1.678-5.296 6.661-4.288 11.129l2.753 12.205c1.008 4.468 4.563 6.731 7.939 5.053 3.377-1.677 5.296-6.659 4.288-11.128l-2.753-12.204z"
          ></path>
          <path
            id="thumb-right"
            fill={colorsSkin.strong}
            d="M137.919 222.851c.114-3.115-1.434-5.651-3.457-5.665-2.023-.015-3.755 2.5-3.87 5.615l-.311 8.507c-.114 3.116 1.434 5.653 3.458 5.667 2.023.013 3.755-2.5 3.869-5.615l.311-8.509z"
          ></path>
        </g>
      </g>
      <g id="arm-left">
        <path
          fill={colorsSkin.light}
          d="M206.445 125.975c4.694-1.025 10.346 1.122 11.38 7.155l3.21 10.894a28.665 28.665 0 011.062 10.427l-.865 10.561c-.198 2.409.041 4.838.012 7.257-.051 4.238-1.764 7.346-5.466 8.153-4.043.883-6.729-1.388-8.057-5.89-.45-1.528-.801-3.097-1.33-4.593l-2.403-6.792a28.606 28.606 0 01-1.524-11.777l.496-6.212c.129-1.617.115-3.241.05-4.862-.177-4.457-.097-13.551 3.435-14.321z"
        ></path>
        <path
          fill={colorsSkin.light}
          d="M213.794 160.455l.061-.002c3.846-.134 7.183 4.685 7.451 10.763l2.016 45.643c.268 6.079-2.633 11.115-6.48 11.249l-.06.002c-3.847.134-7.184-4.685-7.452-10.764l-2.016-45.643c-.268-6.079 2.633-11.115 6.48-11.248z"
        ></path>
        <g id="hand-left">
          <path
            fill={colorsSkin.light}
            d="M213.879 207.481l2.417-.015c4.634-.028 8.609 5.646 8.879 12.673l.24 6.242c.27 7.027-3.268 12.746-7.901 12.773l-2.418.016c-4.634.027-8.609-5.646-8.879-12.673l-.24-6.243c-.27-7.026 3.268-12.745 7.902-12.773z"
          ></path>
          <path
            fill={colorsSkin.light}
            d="M213.282 225.237c1.007-4.469 4.562-6.732 7.938-5.055 3.377 1.678 5.296 6.661 4.289 11.129l-2.754 12.205c-1.008 4.468-4.563 6.731-7.939 5.053-3.376-1.677-5.296-6.659-4.288-11.128l2.754-12.204z"
          ></path>
          <path
            id="thumb-left"
            fill={colorsSkin.strong}
            d="M205.377 222.851c-.113-3.115 1.434-5.651 3.458-5.665 2.023-.015 3.756 2.5 3.869 5.615l.311 8.507c.114 3.116-1.434 5.653-3.457 5.667-2.023.013-3.756-2.5-3.87-5.615l-.311-8.509z"
          ></path>
        </g>
      </g>
    </g>
    <path
      id="shoulders"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M136.671 118.297h70.088c6.946 0 12.538 5.879 12.538 13.183s-5.592 13.184-12.538 13.184h-70.088c-6.946 0-12.538-5.88-12.538-13.184 0-7.304 5.592-13.183 12.538-13.183z"
    ></path>
    <path
      id="bust"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M160.721 116.733h21.855c12.212 0 22.042 10.124 22.042 22.699 0 12.575-9.83 22.698-22.042 22.698h-21.855c-12.212 0-22.043-10.123-22.043-22.698 0-12.575 9.831-22.699 22.043-22.699z"
    ></path>
    <path
      id="breasts-back"
      fill={colorsSkin.strong}
      fillOpacity="0.99"
      fillRule="nonzero"
      d="M172.23 144.664c2.843 0 5.132 2.584 5.132 5.792v5.372c0 3.21-2.289 5.793-5.132 5.793-2.845 0-5.134-2.583-5.134-5.793v-5.372c0-3.208 2.289-5.792 5.134-5.792z"
    ></path>
    <path
      id="breasts"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M159.264 138.586a6.715 6.715 0 00-3.667 1.078c-3.485.221-6.753 1.705-9.141 4.149-2.387 2.445-3.716 5.669-3.716 9.019 0 3.5 1.451 6.857 4.033 9.332 2.581 2.475 6.083 3.865 9.735 3.865 3.326-.003 6.538-1.161 9.043-3.259 2.505-2.098 4.133-4.994 4.583-8.155.092-.433.142-.882.142-1.342v-8.203c0-3.592-2.959-6.484-6.633-6.484h-4.379zm20.392 0c-3.674 0-6.633 2.892-6.633 6.484v8.203c0 .46.05.909.143 1.342.45 3.161 2.078 6.057 4.582 8.155 2.505 2.098 5.717 3.256 9.043 3.259 3.652 0 7.153-1.39 9.736-3.865 2.581-2.475 4.032-5.832 4.032-9.332-.001-3.35-1.328-6.574-3.717-9.019-2.387-2.444-5.654-3.928-9.14-4.149a6.71 6.71 0 00-3.667-1.078h-4.379z"
    ></path>
    <g id="abs" fill={colorsSkin.strong} fillRule="nonzero">
      <path d="M167.269 168.447h-3.418c-1.562 0-2.828 1.051-2.828 2.347v2.718c0 1.297 1.266 2.348 2.828 2.348h3.418c1.561 0 2.828-1.051 2.828-2.348v-2.718c0-1.296-1.267-2.347-2.828-2.347zM167.271 176.658h-5.207c-1.562 0-2.828 1.051-2.828 2.348v2.717c0 1.297 1.266 2.348 2.828 2.348h5.207c1.562 0 2.827-1.051 2.827-2.348v-2.717c0-1.297-1.265-2.348-2.827-2.348zM167.271 184.696h-5.207c-1.562 0-2.828 1.05-2.828 2.347v2.718c0 1.297 1.266 2.348 2.828 2.348h5.207c1.562 0 2.827-1.051 2.827-2.348v-2.718c0-1.297-1.265-2.347-2.827-2.347zM175.638 168.447h3.418c1.561 0 2.828 1.051 2.828 2.347v2.718c0 1.297-1.267 2.348-2.828 2.348h-3.418c-1.562 0-2.827-1.051-2.827-2.348v-2.718c0-1.296 1.265-2.347 2.827-2.347zM175.636 176.658h5.208c1.561 0 2.827 1.051 2.827 2.348v2.717c0 1.297-1.266 2.348-2.827 2.348h-5.208c-1.561 0-2.827-1.051-2.827-2.348v-2.717c0-1.297 1.266-2.348 2.827-2.348zM175.636 184.696h5.208c1.561 0 2.827 1.05 2.827 2.347v2.718c0 1.297-1.266 2.348-2.827 2.348h-5.208c-1.561 0-2.827-1.051-2.827-2.348v-2.718c0-1.297 1.266-2.347 2.827-2.347z"></path>
    </g>
    {!cloth && (
      <g id="topwear" fill="#4B4B4B" fillRule="nonzero">
        <path d="M160.721 116.733h21.855c12.212 0 22.042 10.124 22.042 22.699 0 12.575-.426 29.127-21.59 26.123h-22.307c-21.87 2.768-22.043-13.548-22.043-26.123 0-12.575 9.831-22.699 22.043-22.699z"></path>
        <path
          fillOpacity="0.99"
          d="M171.53 109.344c1.226 0 2.448.075 3.659.223 14.605 1.777 27.622 13.951 27.622 28.797l-2.293 15.895h-57.899v-15.895c0-16.077 12.895-29.02 28.911-29.02z"
        ></path>
      </g>
    )}
    <g id="underwear" fillRule="nonzero">
      <path
        fill="#4F4F4F"
        d="M145.416 194.389c1.466 23.263 12.725 41.27 26.232 41.27 13.683 0 25.744-17.569 26.977-41.27h-53.209z"
      ></path>
      <path
        fill="#4B4B4B"
        d="M198.649 194.385l-26.076 4.563-.219 36.614 2.447 16.046h29.882c.183-29.684-.122-39.711-6.034-57.223zM145.43 194.352l26.693 4.579v36.627l-2.489 16.046H139.82c-.189-29.783-.474-39.683 5.61-57.252z"
      ></path>
    </g>
  </g>
);