import { FiRefreshCcw } from "react-icons/fi";
import React from "react";
import "./Keyboard.css";

function Keyboard() {
  return (
    <>
      <div className="cell well js-keyboard-holder">
        <div className="keyboard-wrapper">
          <div className="keyboard-row">
            <div className="keyboard-keys-words keyboard-key-esc normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal size-small">Esc</span>
              </button>
            </div>
            <div className=" keyboard-keys-words keyboard-key-bar speed-bar-key">
              <button className="pushable-speed-bar">
                <span className="front-speed-bar">
                  <span className="speed-bar-progress">-</span>
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-refresh normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal-refresh-icon size-small">
                  <FiRefreshCcw size="16px" />
                </span>
              </button>
            </div>
          </div>

          <div className="keyboard-row">
            <div className="keyboard-keys-words keyboard-key-~ normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal size-big padding-tweak">~</span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-1 normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal size-big padding-tweak">1</span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-2 normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  2
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-3 normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  3
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-4 normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  4
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-5 normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  5
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-6 normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  6
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-7 normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  7
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-8 normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  8
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-9 normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  9
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-dash normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  -
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-+ normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  +
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-back normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-small">
                  Back
                </span>
              </button>
            </div>
          </div>

          <div className="keyboard-row">
            <div className="keyboard-keys-words keyboard-key-back normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-small">Tab</span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-Q normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  Q
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-W normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  W
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-E normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  E
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-R normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  R
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-T normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  T
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-Y normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  Y
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-U normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  U
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-I normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  I
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-O normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  O
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-P normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  P
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-{ normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  &#123;
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-} normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  &#125;
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-\ normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  &#92;
                </span>
              </button>
            </div>
          </div>

          <div className="keyboard-row">
            <div className="keyboard-keys-words keyboard-key-Caps normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-small">
                  Caps
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-A normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  A
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-S normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  S
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-D normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  D
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-F normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  F
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-G normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  G
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-H normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  H
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-J normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  J
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-K normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  K
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-L normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  L
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-: normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  :
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-commas normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  "
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-Caps normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-small">
                  Enter
                </span>
              </button>
            </div>
          </div>

          <div className="keyboard-row">
            <div className="keyboard-keys-words keyboard-key-shift normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-small">
                  Shift
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-Z normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  Z
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-X normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  X
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-C normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  C
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-V normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  V
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-B normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  B
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-N normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  N
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-M normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  M
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-' normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  '
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-. normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  .
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-; normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  ;
                </span>
              </button>
            </div>
            <div className="keyboard-keys-words keyboard-key-shift normal-key">
              <button className="pushable-normal width-assign">
                <span className="front-normal front-words size-big padding-tweak">
                  Shift
                </span>
              </button>
            </div>
          </div>

          <div className="keyboard-row row6">
            <div className=" keyboard-keys-words keyboard-key-spacebar speed-bar-key">
              <button className="pushable-space-bar">
                <span className="front-space-bar"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Keyboard;
