import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import Pages from "../Pages/Pages";

const NotFound = () => {
  <div className="metaportal_fn_404">
    <div className="container small">
      <Pages
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="512.000000pt"
            height="512.000000pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
            className="fn__svg replaced-svg">
            <defs>
              <linearGradient
                id="fn_gradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">
                <stop className="stop1" offset="0%" />
                <stop className="stop2" offset="100%" />
              </linearGradient>
            </defs>
            <g
              fill="url(#fn_gradient2)"
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              stroke="none">
              <path d="M186 5104 c-34 -11 -64 -31 -102 -68 -92 -93 -84 150 -84 -2476 0 -2625 -8 -2383 84 -2476 93 -92 -149 -84 2476 -84 2625 0 2383 -8 2476 84 92 93 84 -149 84 2476 0 2625 8 2383 -84 2476 -93 92 150 84 -2480 83 -2033 0 -2327 -2 -2370 -15z m4736 -182 l33 -32 3 -285 3 -285 -2401 0 -2401 0 3 284 3 284 25 27 c14 15 34 31 45 35 11 5 1063 8 2337 7 l2318 -2 32 -33z m36 -2727 l-3 -1965 -33 -32 -32 -33 -2330 0 -2330 0 -32 33 -33 32 -3 1965 -2 1965 2400 0 2400 0 -2 -1965z" />
              <path d="M3865 4695 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 15 -16 36 -25 55 -25 19 0 40 9 55 25 16 15 25 36 25 55 0 19 -9 40 -25 55 -15 16 -36 25 -55 25 -19 0 -40 -9 -55 -25z" />
              <path d="M4185 4695 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 15 -16 36 -25 55 -25 19 0 40 9 55 25 16 15 25 36 25 55 0 19 -9 40 -25 55 -15 16 -36 25 -55 25 -19 0 -40 -9 -55 -25z" />
              <path d="M4505 4695 c-16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 15 -16 36 -25 55 -25 19 0 40 9 55 25 16 15 25 36 25 55 0 19 -9 40 -25 55 -15 16 -36 25 -55 25 -19 0 -40 -9 -55 -25z" />
              <path d="M1329 3022 c-37 -19 -51 -53 -37 -92 5 -14 68 -85 141 -157 l131 -133 -142 -143 c-131 -132 -142 -146 -142 -180 0 -24 7 -44 20 -57 13 -13 33 -20 57 -20 34 0 48 11 180 142 l143 142 133 -131 c72 -73 143 -136 157 -141 59 -22 120 39 98 98 -5 14 -68 85 -141 158 l-132 132 132 133 c73 72 136 143 141 157 22 59 -39 120 -98 98 -14 -5 -85 -68 -157 -141 l-133 -132 -132 132 c-73 73 -145 136 -159 142 -20 7 -35 6 -60 -7z" />
              <path d="M3089 3022 c-37 -19 -51 -53 -37 -92 5 -14 68 -85 141 -157 l131 -133 -142 -143 c-131 -132 -142 -146 -142 -180 0 -24 7 -44 20 -57 13 -13 33 -20 57 -20 34 0 48 11 180 142 l143 142 133 -131 c72 -73 143 -136 157 -141 59 -22 120 39 98 98 -5 14 -68 85 -141 157 l-131 133 142 143 c124 125 142 148 142 176 0 43 -38 81 -81 81 -28 0 -51 -18 -176 -142 l-143 -142 -133 131 c-72 73 -144 136 -158 142 -20 7 -35 6 -60 -7z" />
              <path d="M2430 1740 c-217 -30 -436 -140 -541 -272 -74 -94 -82 -144 -27 -182 35 -25 67 -20 97 16 86 104 160 167 242 206 127 60 209 77 369 76 234 -2 387 -60 524 -198 69 -69 84 -80 114 -80 43 0 72 32 72 79 0 87 -192 241 -380 307 -133 46 -334 67 -470 48z" />
            </g>
          </svg>
        }
        title="Nothing Found"
        text="Sorry, no content matched your criteria. Try searching something else."
        inputType="text"
        btnText={
          <Link to="/NotFound" className="metaportal_fn_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="512.000000pt"
              height="512.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
              className="fn__svg replaced-svg">
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M2075 5113 c-437 -38 -840 -195 -1200 -466 -103 -78 -324 -299 -402 -402 -406 -538 -555 -1178 -427 -1825 128 -644 551 -1218 1131 -1532 783 -426 1728 -355 2438 181 l80 61 545 -543 c300 -299 558 -551 573 -561 43 -26 119 -32 171 -12 53 20 109 78 126 131 15 46 7 124 -16 162 -10 15 -262 273 -561 573 l-543 545 61 80 c852 1129 472 2742 -796 3378 -352 177 -798 264 -1180 230z m432 -429 c913 -133 1583 -903 1583 -1819 0 -1014 -821 -1835 -1835 -1835 -695 0 -1322 386 -1639 1010 -227 446 -260 972 -89 1445 138 384 411 723 751 934 159 99 356 184 522 227 207 53 499 69 707 38z" />
              </g>
            </svg>
          </Link>
        }
      />
    </div>
  </div>;
};

export default NotFound;
