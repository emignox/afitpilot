import { IColorSkin } from "../../variablesAvatar/VariableAvatar";

// Mesomorphic Ectomorph
export const getMEcSkinFem = (
  colorsSkin: IColorSkin,
  cloth: boolean
): React.SVGProps<SVGGElement> => (
  <g transform="translate(3.901 -9.554)">
    <g
      id="legs"
      fill={colorsSkin.light}
      fillRule="nonzero"
      transform="matrix(.8863 0 0 1 7.742 0) matrix(.82307 0 0 1 12.049 0)"
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
    <g transform="matrix(.76586 0 0 1 16.086 0)">
      <path
        id="deltoids"
        fill={colorsSkin.light}
        fillOpacity="0.99"
        fillRule="nonzero"
        d="M67.966 106.844c1.352 0 2.699.074 4.034.218 16.102 1.737 30.453 13.632 30.453 28.139l-2.528 15.532-6.387 27.929c0 15.71-7.914 16.838-25.572 16.838s-24.317-2.541-24.317-18.251l-7.557-26.516v-15.532c0-15.71 14.216-28.357 31.874-28.357z"
      ></path>
    </g>
    <g transform="matrix(.7295 0 0 1 18.421 0)">
      <path
        id="trunk"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M67.925 170.441h1.023c16.943 0 22.442-8.764 25.223 3.114l5.36 23.836c2.778 11.868-13.64 21.717-30.583 21.717h-1.023c-16.943 0-33.361-9.849-30.583-21.717l5.924-23.836c2.781-11.878 7.716-3.114 24.659-3.114z"
      ></path>
    </g>
    <g
      id="arms"
      fillRule="nonzero"
      transform="matrix(.8863 0 0 1 7.742 0) matrix(.82307 0 0 1 12.049 0)"
    >
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
    <g transform="matrix(.7295 0 0 1 18.421 0)">
      <path
        id="shoulders"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M29.534 115.593h77.272c7.658 0 13.823 5.745 13.823 12.882s-6.165 12.882-13.823 12.882H29.534c-7.658 0-13.823-5.745-13.823-12.882s6.165-12.882 13.823-12.882z"
      ></path>
    </g>
    <g transform="matrix(.7295 0 0 1 18.421 0)">
      <path
        id="bust"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M56.05 114.065h24.095c13.464 0 24.302 9.892 24.302 22.18 0 12.287-10.838 22.179-24.302 22.179H56.05c-13.463 0-24.302-9.892-24.302-22.179 0-12.288 10.839-22.18 24.302-22.18z"
      ></path>
    </g>
    <g transform="matrix(.7295 0 0 1 18.421 0)">
      <path
        id="breasts-back"
        fill={colorsSkin.strong}
        fillOpacity="0.99"
        fillRule="nonzero"
        d="M68.738 141.357a5.648 5.648 0 015.659 5.66v5.249a5.647 5.647 0 01-5.659 5.66 5.647 5.647 0 01-5.66-5.66v-5.249a5.648 5.648 0 015.66-5.66z"
      ></path>
    </g>
    <g transform="matrix(.7295 0 0 1 18.421 0)">
      <path
        id="breasts"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M54.444 135.418a8.105 8.105 0 00-4.042 1.053c-3.843.216-7.446 1.666-10.078 4.055-2.632 2.389-4.097 5.539-4.097 8.812 0 3.42 1.599 6.701 4.446 9.119 2.846 2.419 6.707 3.777 10.733 3.777 3.667-.003 7.208-1.135 9.97-3.185 2.761-2.05 4.556-4.88 5.052-7.968a5.59 5.59 0 00.157-1.312v-8.015c0-3.51-3.262-6.336-7.313-6.336h-4.828zm22.482 0c-4.05 0-7.312 2.826-7.312 6.336v8.015c0 .45.055.889.157 1.312.496 3.088 2.291 5.918 5.052 7.968 2.761 2.05 6.303 3.182 9.97 3.185 4.026 0 7.886-1.358 10.733-3.777 2.846-2.418 4.446-5.699 4.446-9.119-.001-3.273-1.465-6.423-4.098-8.812-2.632-2.389-6.234-3.839-10.077-4.055a8.106 8.106 0 00-4.043-1.053h-4.828z"
      ></path>
    </g>
    <g id="abs">
      <path
        fill={colorsSkin.strong}
        fillRule="nonzero"
        d="M63.269 164.597H59.5c-1.722 0-3.117 1.027-3.117 2.293v2.656c0 1.267 1.395 2.294 3.117 2.294h3.769c1.721 0 3.117-1.027 3.117-2.294v-2.656c0-1.266-1.396-2.293-3.117-2.293zM63.27 172.62h-5.741c-1.722 0-3.117 1.027-3.117 2.294v2.655c0 1.267 1.395 2.294 3.117 2.294h5.741c1.722 0 3.117-1.027 3.117-2.294v-2.655c0-1.267-1.395-2.294-3.117-2.294zM63.27 180.475h-5.741c-1.722 0-3.117 1.026-3.117 2.293v2.656c0 1.267 1.395 2.294 3.117 2.294h5.741c1.722 0 3.117-1.027 3.117-2.294v-2.656c0-1.267-1.395-2.293-3.117-2.293zM72.495 164.597h3.769c1.721 0 3.117 1.027 3.117 2.293v2.656c0 1.267-1.396 2.294-3.117 2.294h-3.769c-1.722 0-3.117-1.027-3.117-2.294v-2.656c0-1.266 1.395-2.293 3.117-2.293zM72.493 172.62h5.742c1.721 0 3.117 1.027 3.117 2.294v2.655c0 1.267-1.396 2.294-3.117 2.294h-5.742c-1.721 0-3.117-1.027-3.117-2.294v-2.655c0-1.267 1.396-2.294 3.117-2.294zM72.493 180.475h5.742c1.721 0 3.117 1.026 3.117 2.293v2.656c0 1.267-1.396 2.294-3.117 2.294h-5.742c-1.721 0-3.117-1.027-3.117-2.294v-2.656c0-1.267 1.396-2.293 3.117-2.293z"
        transform="matrix(.8863 0 0 1 7.742 0) matrix(.82307 0 0 1 12.049 0)"
      ></path>
    </g>
    {!cloth && (
      <g id="topwear" fill="#4B4B4B" fillRule="nonzero">
        <path
          d="M160.721 116.733h21.855c12.212 0 22.042 10.124 22.042 22.699 0 12.575-.426 29.127-21.59 26.123h-22.307c-21.87 2.768-22.043-13.548-22.043-26.123 0-12.575 9.831-22.699 22.043-22.699z"
          transform="matrix(.80428 0 0 .98154 -69.956 -.481)"
        ></path>
        <path
          fillOpacity="0.99"
          d="M171.53 109.344c1.226 0 2.448.075 3.659.223 14.605 1.777 27.354 11.235 27.622 28.797l-.523 16.142-59.669-.247v-15.895c-.26-18.102 12.895-29.02 28.911-29.02z"
          transform="matrix(.80428 0 0 .98154 -69.956 -.481)"
        ></path>
      </g>
    )}
    <g id="underwear">
      <path
        fill="#4F4F4F"
        fillRule="nonzero"
        d="M39.176 189.945c1.616 22.732 14.029 40.327 28.92 40.327 15.086 0 28.383-17.167 29.742-40.327H39.176z"
        transform="matrix(.8863 0 0 1 7.742 0) matrix(.82307 0 0 1 12.049 0)"
      ></path>
      <path
        fill="#4B4B4B"
        fillRule="nonzero"
        d="M97.865 189.941L69.117 194.4l-.242 35.777 2.698 15.679h32.945c.202-29.005-.135-38.803-6.653-55.915zM39.192 189.909l29.429 4.475v35.79l-2.745 15.679H33.007c-.209-29.102-.523-38.776 6.185-55.944z"
        transform="matrix(.8863 0 0 1 7.742 0) matrix(.82307 0 0 1 12.049 0)"
      ></path>
    </g>
  </g>
);

// Balanced Ectomorph
export const getBEcSkinFem = (
  colorsSkin: IColorSkin,
  cloth: boolean
): React.SVGProps<SVGGElement> => (
  <g transform="translate(3.401 -6.884)">
    <g id="legs" transform="matrix(.8863 0 0 1 7.742 0)">
      <g id="leg-left" transform="matrix(.88278 0 0 1 -87.537 15.658)">
        <path
          id="tibia-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M188.016 245.119h2.082a9.457 9.457 0 019.456 9.456l.001 25.327-.001 17.983 1.894 18.43c0 4.028-3.869 7.292-8.643 7.292h-2.015c-4.773 0-8.642-3.264-8.642-7.292v-27.417c0-1.764-1.112-24.01-1.112-26.082v-10.717a6.984 6.984 0 016.98-6.98z"
          transform="translate(-.426 -.667)"
        ></path>
        <path
          id="thigh-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M191.234 175.194h7.531a4.55 4.55 0 014.502 3.902l1.745 33.311c.212 1.481.319 2.976.319 4.472v11.072c0 1.729-.143 3.456-.426 5.162l-.926 5.564a27.538 27.538 0 01-3.213 9.063s-2.293 4.918-2.293 6.087c0 3.73.495 8.854-5.006 8.768h-4.452c-3.995 0-9.246.016-9.246-3.98 0-.862-.163-10.669-.399-11.843l-1.474-7.336-1.417-9.349a31.478 31.478 0 01-.355-4.711v-35.072c0-8.345 6.765-15.11 15.11-15.11z"
          transform="translate(.852 -.667)"
        ></path>
        <g id="foot-left" transform="translate(-2.556) translate(.852 -.667)">
          <path
            id="color3"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M188.995 308.505h8.115c4.68 0 8.474 3.373 8.474 7.532s-3.794 7.531-8.474 7.531h-8.115c-4.679 0-8.474-3.372-8.474-7.531s3.795-7.532 8.474-7.532z"
          ></path>
          <path
            id="color31"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M183.327 311.254h19.451c1.549 0 2.806 1.618 2.806 3.616v4.729c0 1.997-1.257 3.616-2.806 3.616h-19.451c-1.549 0-2.806-1.619-2.806-3.616v-4.729c0-1.998 1.257-3.616 2.806-3.616z"
          ></path>
        </g>
      </g>
      <g id="leg-right" transform="matrix(.88278 0 0 1 -86.784 14.991)">
        <path
          id="tibia-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M188.016 245.119h2.082a9.457 9.457 0 019.456 9.456l.001 25.327-.001 17.983 1.894 18.43c0 4.028-3.869 7.292-8.643 7.292h-2.015c-4.773 0-8.642-3.264-8.642-7.292v-27.417c0-1.764-1.112-24.01-1.112-26.082v-10.717a6.984 6.984 0 016.98-6.98z"
          transform="matrix(-1 0 0 1 352.135 0)"
        ></path>
        <path
          id="thigh-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M191.234 175.194h7.531a4.55 4.55 0 014.502 3.902l1.745 33.311c.212 1.481.319 2.976.319 4.472v11.072c0 1.729-.143 3.456-.426 5.162l-.926 5.564a27.538 27.538 0 01-3.213 9.063s-2.293 4.918-2.293 6.087c0 3.73.495 8.854-5.006 8.768h-4.452c-3.995 0-9.246.016-9.246-3.98 0-.862-.163-10.669-.399-11.843l-1.474-7.336-1.417-9.349a31.478 31.478 0 01-.355-4.711v-35.072c0-8.345 6.765-15.11 15.11-15.11z"
          transform="matrix(-1 0 0 1 350.857 0)"
        ></path>
        <g
          id="foot-right"
          transform="matrix(1 0 0 1 1.704 .667) translate(.852 -.667)"
        >
          <path
            id="color32"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M161.873 308.505h-8.116c-4.68 0-8.473 3.384-8.473 7.558 0 4.174 3.793 7.557 8.473 7.557h8.116c4.679 0 8.473-3.383 8.473-7.557s-3.794-7.558-8.473-7.558z"
          ></path>
          <path
            id="color33"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M167.54 315.333h-19.45c-1.549 0-2.806 1.121-2.806 2.503v3.274c0 1.382 1.257 2.502 2.806 2.502h19.45c1.55 0 2.806-1.12 2.806-2.502v-3.274c0-1.382-1.256-2.503-2.806-2.503z"
          ></path>
        </g>
      </g>
    </g>
    <path
      id="deltoids"
      fill={colorsSkin.light}
      fillOpacity="0.99"
      fillRule="nonzero"
      d="M67.966 106.844c1.352 0 2.699.074 4.034.218 16.102 1.737 30.453 13.632 30.453 28.139l-2.528 15.532-5.709 30.369c0 15.71-8.592 14.398-26.25 14.398s-25.017-.619-25.017-16.329l-6.857-28.438v-15.532c0-15.71 14.216-28.357 31.874-28.357z"
      transform="matrix(.76586 0 0 1 16.086 0)"
    ></path>
    <path
      id="trunk"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M67.925 170.441h1.023c16.943 0 22.442-8.764 25.223 3.114l3.223 20.006c2.778 11.868-11.503 25.547-28.446 25.547h-1.023c-16.943 0-31.863-14.378-29.085-26.246l4.426-19.307c2.781-11.878 7.716-3.114 24.659-3.114z"
      transform="matrix(.73664 0 0 1 17.932 0)"
    ></path>
    <g id="arms" transform="matrix(.8863 0 0 1 7.742 0)">
      <g id="arm-right" transform="matrix(.82307 0 0 1 13.177 0)">
        <path
          id="bicep-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M106.462 123.095c5.175-1.001 11.84 6.466 12.98 12.361 0 0 3.368 30.511 3.336 32.875-.057 4.141-1.945 7.178-6.027 7.967-4.457.863-7.418-1.357-8.882-5.756-.497-1.493-3.462-27.641-3.533-29.225-.195-4.355-1.768-17.469 2.126-18.222z"
          transform="matrix(-1 0 0 1 135.265 -1)"
        ></path>
        <path
          id="forearm-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M114.564 156.787l.067-.002c4.241-.131 7.919 4.578 8.215 10.517l2.223 44.6c.295 5.94-2.903 10.861-7.145 10.992l-.066.002c-4.241.131-7.92-4.578-8.216-10.518l-2.222-44.6c-.296-5.94 2.903-10.861 7.144-10.991z"
          transform="matrix(-1 0 0 1 135.265 -1)"
        ></path>
        <g id="hand-right" fill={colorsSkin.light} fillRule="nonzero">
          <path d="M21.541 202.739l-2.666-.015c-5.109-.027-9.491 5.517-9.789 12.383l-.264 6.1c-.298 6.866 3.602 12.454 8.711 12.481l2.665.015c5.109.027 9.491-5.517 9.789-12.383l.265-6.1c.297-6.866-3.603-12.454-8.711-12.481z"></path>
          <path d="M22.199 220.089c-1.111-4.367-5.03-6.578-8.752-4.939-3.722 1.639-5.839 6.508-4.728 10.874l3.036 11.926c1.111 4.366 5.03 6.577 8.752 4.938 3.723-1.639 5.839-6.507 4.728-10.874l-3.036-11.925z"></path>
        </g>
        <path
          id="thumb-right"
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M30.913 217.757c.125-3.044-1.581-5.522-3.812-5.536-2.23-.014-4.14 2.443-4.266 5.487l-.343 8.313c-.126 3.044 1.581 5.523 3.812 5.537 2.23.013 4.14-2.443 4.266-5.487l.343-8.314z"
        ></path>
      </g>
      <g
        id="arm-left"
        fillRule="nonzero"
        transform="matrix(.82307 0 0 1 12.049 0)"
      >
        <path
          id="bicep-left1"
          fill={colorsSkin.light}
          d="M106.462 123.095c5.175-1.001 11.84 6.466 12.98 12.361 0 0 3.368 30.511 3.336 32.875-.057 4.141-1.945 7.178-6.027 7.967-4.457.863-7.418-1.357-8.882-5.756-.497-1.493-3.462-27.641-3.533-29.225-.195-4.355-1.768-17.469 2.126-18.222z"
        ></path>
        <path
          id="forearm-left1"
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
    <g transform="matrix(.7295 0 0 1 18.421 0)">
      <path
        id="shoulders"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M29.534 115.593h77.272c7.658 0 13.823 5.745 13.823 12.882s-6.165 12.882-13.823 12.882H29.534c-7.658 0-13.823-5.745-13.823-12.882s6.165-12.882 13.823-12.882z"
      ></path>
    </g>
    <g transform="matrix(.7295 0 0 1 18.421 0)">
      <path
        id="bust"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M56.05 114.065h24.095c13.464 0 24.302 9.892 24.302 22.18 0 12.287-10.838 22.179-24.302 22.179H56.05c-13.463 0-24.302-9.892-24.302-22.179 0-12.288 10.839-22.18 24.302-22.18z"
      ></path>
    </g>
    <g transform="matrix(.7295 0 0 1 18.421 0)">
      <path
        id="breasts-back"
        fill={colorsSkin.strong}
        fillOpacity="0.99"
        fillRule="nonzero"
        d="M68.738 141.357a5.648 5.648 0 015.659 5.66v5.249a5.647 5.647 0 01-5.659 5.66 5.647 5.647 0 01-5.66-5.66v-5.249a5.648 5.648 0 015.66-5.66z"
      ></path>
    </g>
    <g transform="matrix(.7295 0 0 .95453 18.421 6.158)">
      <path
        id="breasts"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M54.444 135.418a8.105 8.105 0 00-4.042 1.053c-3.843.216-7.446 1.666-10.078 4.055-2.632 2.389-4.097 5.539-4.097 8.812 0 3.42 1.599 6.701 4.446 9.119 2.846 2.419 6.707 3.777 10.733 3.777 3.667-.003 7.208-1.135 9.97-3.185 2.761-2.05 4.556-4.88 5.052-7.968a5.59 5.59 0 00.157-1.312v-8.015c0-3.51-3.262-6.336-7.313-6.336h-4.828zm22.482 0c-4.05 0-7.312 2.826-7.312 6.336v8.015c0 .45.055.889.157 1.312.496 3.088 2.291 5.918 5.052 7.968 2.761 2.05 6.303 3.182 9.97 3.185 4.026 0 7.886-1.358 10.733-3.777 2.846-2.418 4.446-5.699 4.446-9.119-.001-3.273-1.465-6.423-4.098-8.812-2.632-2.389-6.234-3.839-10.077-4.055a8.106 8.106 0 00-4.043-1.053h-4.828z"
      ></path>
    </g>
    <g id="bra">
      <path
        fill="#444"
        fillRule="nonzero"
        d="M61.915 155.643H74.93c.794 0 1.433.62 1.433 1.392 0 .771-.639 1.391-1.433 1.391H61.915c-.794 0-1.433-.62-1.433-1.391 0-.772.639-1.392 1.433-1.392z"
        transform="matrix(.8863 0 0 1 7.742 0) matrix(.82307 0 0 1 12.049 0)"
      ></path>
      <path
        fill="#4F4F4F"
        fillRule="nonzero"
        d="M95.425 142.297a1.321 1.321 0 00-.355.077l-7.598 2.756c-5.998 2.176-11.656 4.771-13.484 9.918 2.932 2.944 7.01 4.631 11.295 4.641 7.943 0 14.497-5.647 15.49-12.956-.021-.155-.034-.312-.06-.466-1.618-.685-3.507-4.107-5.288-3.97zm-55.05.01c-1.625-.102-3.357 3.201-4.86 3.776-.036.202-.067.404-.095.607.973 7.33 7.537 12.999 15.495 12.999 4.115-.01 8.047-1.565 10.956-4.31-1.719-5.302-7.461-8.032-13.574-10.249l-7.599-2.756a1.156 1.156 0 00-.323-.067z"
        transform="matrix(.8863 0 0 1 7.742 0) matrix(.82307 0 0 1 12.049 0)"
      ></path>
    </g>
    <g id="abs">
      <path
        fill={colorsSkin.strong}
        fillRule="nonzero"
        d="M63.27 172.62h-5.741c-1.722 0-3.117 1.027-3.117 2.294v2.655c0 1.267 1.395 2.294 3.117 2.294h5.741c1.722 0 3.117-1.027 3.117-2.294v-2.655c0-1.267-1.395-2.294-3.117-2.294z"
        transform="matrix(.8863 0 0 1 7.742 0) matrix(.82307 0 0 1 12.049 -5)"
      ></path>
      <path
        fill={colorsSkin.strong}
        fillRule="nonzero"
        d="M63.27 180.475h-5.741c-1.722 0-3.117 1.026-3.117 2.293v2.656c0 1.267 1.395 2.294 3.117 2.294h5.741c1.722 0 3.117-1.027 3.117-2.294v-2.656c0-1.267-1.395-2.293-3.117-2.293z"
        transform="matrix(.8863 0 0 1 7.742 0) matrix(.82307 0 0 1 12.049 -4)"
      ></path>
      <path
        fill={colorsSkin.strong}
        fillRule="nonzero"
        d="M72.493 172.62h5.742c1.721 0 3.117 1.027 3.117 2.294v2.655c0 1.267-1.396 2.294-3.117 2.294h-5.742c-1.721 0-3.117-1.027-3.117-2.294v-2.655c0-1.267 1.396-2.294 3.117-2.294z"
        transform="matrix(.8863 0 0 1 7.742 0) matrix(.82307 0 0 1 12.049 -5)"
      ></path>
      <path
        fill={colorsSkin.strong}
        fillRule="nonzero"
        d="M72.493 180.475h5.742c1.721 0 3.117 1.026 3.117 2.293v2.656c0 1.267-1.396 2.294-3.117 2.294h-5.742c-1.721 0-3.117-1.027-3.117-2.294v-2.656c0-1.267 1.396-2.293 3.117-2.293z"
        transform="matrix(.8863 0 0 1 7.742 0) matrix(.82307 0 0 1 12.049 -4)"
      ></path>
    </g>
    <g id="underwear" fillRule="nonzero">
      <path
        fill="#4F4F4F"
        d="M40.407 189.941c1.616 22.732 12.798 40.331 27.689 40.331 15.086 0 29.042-16.927 30.401-40.087l-58.09-.244z"
        transform="matrix(.7295 0 0 1 17.421 0)"
      ></path>
      <path
        fill="#4B4B4B"
        d="M98.523 190.185L69.117 194.4l1.129 36.1c-.562 5.119-.342 10.237.555 15.356h30.717c1.621-29.005 3.523-38.559-2.995-55.671zM40.372 190.185l28.249 4.199v35.79c.214 5.319.102 10.601-.472 15.831l-30.717-.182c-.209-29.102-3.768-38.47 2.94-55.638z"
        transform="matrix(.7295 0 0 1 17.421 0)"
      ></path>
    </g>
    {!cloth && (
      <g id="topwear" fill="#4B4B4B" fillRule="nonzero">
        <path
          d="M160.721 116.733h21.855c12.212 0 22.042 10.124 22.042 22.699 0 12.575-.426 29.127-21.59 26.123h-22.307c-21.87 2.768-22.043-13.548-22.043-26.123 0-12.575 9.831-22.699 22.043-22.699z"
          transform="matrix(.80428 0 0 .98154 -69.456 -1.835)"
        ></path>
        <path
          fillOpacity="0.99"
          d="M171.53 109.344c1.226 0 2.448.075 3.659.223 14.605 1.777 27.354 11.235 27.622 28.797l-.523 16.142-59.669-.247v-15.895c-.26-18.102 12.895-29.02 28.911-29.02z"
          transform="matrix(.80428 0 0 .98154 -69.456 -1.835)"
        ></path>
      </g>
    )}
  </g>
);

// Endomorphic Ectomorph
export const getEnEcSkinFem = (
  colorsSkin: IColorSkin,
  cloth: boolean
): React.SVGProps<SVGGElement> => (
  <g transform="translate(3.401 -6.847)">
    <g id="legs" transform="matrix(.8863 0 0 1 7.742 0)">
      <g id="leg-left" transform="matrix(.88278 0 0 1 -87.537 15.658)">
        <path
          id="tibia-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M188.016 245.119h2.082a9.457 9.457 0 019.456 9.456l.001 25.327-.001 17.983 1.894 18.43c0 4.028-3.869 7.292-8.643 7.292h-2.015c-4.773 0-8.642-3.264-8.642-7.292v-27.417c0-1.764-1.112-24.01-1.112-26.082v-10.717a6.984 6.984 0 016.98-6.98z"
          transform="translate(-.426 -.667)"
        ></path>
        <path
          id="thigh-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M191.234 175.194h7.531c1.941 0 7.246 3.553 7.286 3.837l-.72 48.92c0 1.729-.143 3.456-.426 5.162l-.926 5.564a27.538 27.538 0 01-3.213 9.063s-2.293 4.918-2.293 6.087c0 3.73.495 8.854-5.006 8.768h-4.452c-3.995 0-9.246.016-9.246-3.98 0-.862-.163-10.669-.399-11.843l-1.474-7.336-1.417-9.349a31.478 31.478 0 01-.355-4.711v-35.072c0-8.345 6.765-15.11 15.11-15.11z"
          transform="translate(.852 -.667)"
        ></path>
        <g id="foot-left" transform="translate(-2.556) translate(.852 -.667)">
          <path
            id="color3"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M188.995 308.505h8.115c4.68 0 8.474 3.373 8.474 7.532s-3.794 7.531-8.474 7.531h-8.115c-4.679 0-8.474-3.372-8.474-7.531s3.795-7.532 8.474-7.532z"
          ></path>
          <path
            id="color31"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M183.327 311.254h19.451c1.549 0 2.806 1.618 2.806 3.616v4.729c0 1.997-1.257 3.616-2.806 3.616h-19.451c-1.549 0-2.806-1.619-2.806-3.616v-4.729c0-1.998 1.257-3.616 2.806-3.616z"
          ></path>
        </g>
      </g>
      <g id="leg-right" transform="matrix(.88278 0 0 1 -86.784 14.991)">
        <path
          id="tibia-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M188.016 245.119h2.082a9.457 9.457 0 019.456 9.456l.001 25.327-.001 17.983 1.894 18.43c0 4.028-3.869 7.292-8.643 7.292h-2.015c-4.773 0-8.642-3.264-8.642-7.292v-27.417c0-1.764-1.112-24.01-1.112-26.082v-10.717a6.984 6.984 0 016.98-6.98z"
          transform="matrix(-1 0 0 1 352.135 0)"
        ></path>
        <path
          id="thigh-right"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M191.234 175.194h7.531c1.941 0 7.223 3.592 7.263 3.876l-1.016 33.337c.212 1.481.176 19-.107 20.706l-.926 5.564a27.538 27.538 0 01-3.213 9.063s-2.293 4.918-2.293 6.087c0 3.73.495 8.854-5.006 8.768h-4.452c-3.995 0-9.246.016-9.246-3.98 0-.862-.163-10.669-.399-11.843l-1.474-7.336-1.417-9.349a31.478 31.478 0 01-.355-4.711v-35.072c0-8.345 6.765-15.11 15.11-15.11z"
          transform="matrix(-1 0 0 1 350.857 0)"
        ></path>
        <g
          id="foot-right"
          transform="matrix(1 0 0 1 1.704 .667) translate(.852 -.667)"
        >
          <path
            id="color32"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M161.873 308.505h-8.116c-4.68 0-8.473 3.384-8.473 7.558 0 4.174 3.793 7.557 8.473 7.557h8.116c4.679 0 8.473-3.383 8.473-7.557s-3.794-7.558-8.473-7.558z"
          ></path>
          <path
            id="color33"
            fill={colorsSkin.light}
            fillRule="nonzero"
            d="M167.54 315.333h-19.45c-1.549 0-2.806 1.121-2.806 2.503v3.274c0 1.382 1.257 2.502 2.806 2.502h19.45c1.55 0 2.806-1.12 2.806-2.502v-3.274c0-1.382-1.256-2.503-2.806-2.503z"
          ></path>
        </g>
      </g>
    </g>
    <path
      id="deltoids"
      fill={colorsSkin.strong}
      fillOpacity="0.99"
      fillRule="nonzero"
      d="M36.092 135.201c0-15.71 66.361-14.507 66.361 0l-2.528 15.532-.748 41.709c0 15.71-13.553 3.058-31.211 3.058-17.658 0-31.334 13.428-31.334-2.282l-.54-42.485v-15.532z"
      transform="matrix(.76586 0 0 1 16.086 0)"
    ></path>
    <path
      id="deltoids1"
      fill={colorsSkin.light}
      fillOpacity="0.99"
      fillRule="nonzero"
      d="M67.966 106.844c1.352 0 2.699.074 4.034.218 16.102 1.737 30.453 13.632 30.453 28.139l-2.528 15.532-.748 41.709c0 15.71-13.553 3.058-31.211 3.058-17.658 0-31.334 13.428-31.334-2.282l-.54-42.485v-15.532c0-15.71 14.216-28.357 31.874-28.357z"
      transform="matrix(.71118 0 0 1 19.874 0)"
    ></path>
    <path
      id="trunk"
      fill={colorsSkin.light}
      fillRule="nonzero"
      d="M67.925 170.441h1.023c16.943 0 22.442-8.764 25.223 3.114l1.493 16.63c.572 2.443-13.26 28.923-26.716 28.923h-1.023c-8.563 0-28.059-25.77-27.264-29.167l2.605-16.386c2.781-11.878 7.716-3.114 24.659-3.114z"
      transform="matrix(.79868 0 0 1 13.706 0)"
    ></path>
    <g id="arms" transform="matrix(.8863 0 0 1 7.742 0)">
      <g id="arm-right" transform="matrix(.82307 0 0 1 13.177 0)">
        <path
          id="bicep-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M106.462 123.095c5.175-1.001 11.84 6.466 12.98 12.361 0 0 3.368 30.511 3.336 32.875-.057 4.141-1.945 7.178-6.027 7.967-4.457.863-7.418-1.357-8.882-5.756-.497-1.493-3.462-27.641-3.533-29.225-.195-4.355-1.768-17.469 2.126-18.222z"
          transform="matrix(-1 0 0 1 135.265 -1)"
        ></path>
        <path
          id="forearm-left"
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M114.564 156.787l.067-.002c4.241-.131 7.919 4.578 8.215 10.517l2.223 44.6c.295 5.94-2.903 10.861-7.145 10.992l-.066.002c-4.241.131-7.92-4.578-8.216-10.518l-2.222-44.6c-.296-5.94 2.903-10.861 7.144-10.991z"
          transform="matrix(-1 0 0 1 135.265 -1)"
        ></path>
        <g id="hand-right" fill={colorsSkin.light} fillRule="nonzero">
          <path d="M21.541 202.739l-2.666-.015c-5.109-.027-9.491 5.517-9.789 12.383l-.264 6.1c-.298 6.866 3.602 12.454 8.711 12.481l2.665.015c5.109.027 9.491-5.517 9.789-12.383l.265-6.1c.297-6.866-3.603-12.454-8.711-12.481z"></path>
          <path d="M22.199 220.089c-1.111-4.367-5.03-6.578-8.752-4.939-3.722 1.639-5.839 6.508-4.728 10.874l3.036 11.926c1.111 4.366 5.03 6.577 8.752 4.938 3.723-1.639 5.839-6.507 4.728-10.874l-3.036-11.925z"></path>
        </g>
        <path
          id="thumb-right"
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M30.913 217.757c.125-3.044-1.581-5.522-3.812-5.536-2.23-.014-4.14 2.443-4.266 5.487l-.343 8.313c-.126 3.044 1.581 5.523 3.812 5.537 2.23.013 4.14-2.443 4.266-5.487l.343-8.314z"
        ></path>
      </g>
      <g
        id="arm-left"
        fillRule="nonzero"
        transform="matrix(.82307 0 0 1 12.049 0)"
      >
        <path
          id="bicep-left1"
          fill={colorsSkin.light}
          d="M106.462 123.095c5.175-1.001 11.84 6.466 12.98 12.361 0 0 3.368 30.511 3.336 32.875-.057 4.141-1.945 7.178-6.027 7.967-4.457.863-7.418-1.357-8.882-5.756-.497-1.493-3.462-27.641-3.533-29.225-.195-4.355-1.768-17.469 2.126-18.222z"
        ></path>
        <path
          id="forearm-left1"
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
    <g transform="matrix(.7295 0 0 1 18.421 0)">
      <path
        id="shoulders"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M29.534 115.593h77.272c7.658 0 13.823 5.745 13.823 12.882s-6.165 12.882-13.823 12.882H29.534c-7.658 0-13.823-5.745-13.823-12.882s6.165-12.882 13.823-12.882z"
      ></path>
    </g>
    <g transform="matrix(.7295 0 0 .94893 18.421 5.825)">
      <path
        id="bust"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M56.05 114.065h24.095c13.464 0 24.302 9.892 24.302 22.18 0 12.287-10.838 22.179-24.302 22.179H56.05c-13.463 0-24.302-9.892-24.302-22.179 0-12.288 10.839-22.18 24.302-22.18z"
      ></path>
    </g>
    <g transform="matrix(1.25733 0 0 .8443 -18.326 24.589)">
      <path
        id="breasts-back"
        fill={colorsSkin.strong}
        fillOpacity="0.99"
        fillRule="nonzero"
        d="M68.738 141.357a5.648 5.648 0 015.659 5.66v5.249a5.647 5.647 0 01-5.659 5.66 5.647 5.647 0 01-5.66-5.66v-5.249a5.648 5.648 0 015.66-5.66z"
      ></path>
    </g>
    <g transform="matrix(.7295 0 0 .83935 18.421 21.755)">
      <path
        id="breasts"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M54.444 135.418a8.105 8.105 0 00-4.042 1.053c-3.843.216-7.446 1.666-10.078 4.055-2.632 2.389-4.097 5.539-4.097 8.812 0 3.42 1.599 6.701 4.446 9.119 2.846 2.419 6.707 3.777 10.733 3.777 3.667-.003 7.208-1.135 9.97-3.185 2.761-2.05 4.556-4.88 5.052-7.968a5.59 5.59 0 00.157-1.312v-8.015c0-3.51-3.262-6.336-7.313-6.336h-4.828zm22.482 0c-4.05 0-7.312 2.826-7.312 6.336v8.015c0 .45.055.889.157 1.312.496 3.088 2.291 5.918 5.052 7.968 2.761 2.05 6.303 3.182 9.97 3.185 4.026 0 7.886-1.358 10.733-3.777 2.846-2.418 4.446-5.699 4.446-9.119-.001-3.273-1.465-6.423-4.098-8.812-2.632-2.389-6.234-3.839-10.077-4.055a8.106 8.106 0 00-4.043-1.053h-4.828z"
      ></path>
    </g>
    <g id="underwear">
      <path
        fill="#4F4F4F"
        fillRule="nonzero"
        d="M40.407 189.941c-2.327 22.986 12.798 40.331 27.689 40.331 15.086 0 33.456-17.053 30.401-40.087l-58.09-.244z"
        transform="matrix(.73606 0 0 1 17.03 0) matrix(1.11777 0 0 1 -8.18 0)"
      ></path>
      <path
        fill="#4B4B4B"
        fillRule="nonzero"
        d="M101.913 190.188L69.117 194.4l1.129 36.1c-.562 5.119-.507 10.387.391 15.505l30.343-.149c1.62-29.005 2.383-37.045.933-55.668zM36.832 189.941l31.789 4.443v35.79a105.94 105.94 0 01-.532 15.831l-30.378-.179c-1.402-29.085-2.142-38.566-.879-55.885z"
        transform="matrix(.73606 0 0 1 17.03 0)"
      ></path>
      <g transform="matrix(.73606 0 0 1 17.03 0) matrix(1.35859 0 0 1 66.5 182.619)">
        <path
          id="navel"
          fill="#81584A"
          d="M3.426 1.376a1.262 1.262 0 00-2.522 0v2.347a1.261 1.261 0 002.522 0V1.376z"
        ></path>
      </g>
    </g>
    {!cloth && (
      <g id="topwear" fill="#4B4B4B" fillRule="nonzero">
        <path
          d="M160.721 116.733h21.855c12.212 0 22.042 10.124 22.042 22.699 0 12.575-.426 29.127-21.59 26.123h-22.307c-21.87 2.768-22.043-13.548-22.043-26.123 0-12.575 9.831-22.699 22.043-22.699z"
          transform="matrix(.80428 0 0 .92694 -69.456 4.135)"
        ></path>
        <path
          fillOpacity="0.99"
          d="M171.53 109.344c1.226 0 2.448.075 3.659.223 14.605 1.777 27.354 11.235 27.622 28.797l-.523 16.142-59.669-.247v-15.895c-.26-18.102 12.895-29.02 28.911-29.02z"
          transform="matrix(.80428 0 0 .92694 -69.456 4.135)"
        ></path>
      </g>
    )}
  </g>
);