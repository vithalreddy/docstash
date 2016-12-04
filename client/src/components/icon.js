import React, {PropTypes} from 'react';

class Icon extends React.Component {
    render() {
        switch (this.props.type) {
                //Logo
            case 'logo':
                return (
                    <svg viewBox="0 0 262 295"><path className="docstash" d="M145.4 5c-17.5 4.6-33 17-41 32.7-1.4 3-3 5.3-3.3 5.3l-5.5-1.6c-6-1.8-18.5-2-24.6-.4C59 44 47.7 53.2 42 64c-3.6 7-6.4 19-5.6 24 .6 3.7.5 3.8-4 5-6 1.7-15.2 7.7-18.7 12.3-10.4 13.7-11.4 32-2.5 46 3.8 6 9.7 10.8 17.4 14.4 5.3 2.5 7.3 2.8 18.7 3l12.7.5v7.7c0 4 .5 9.3 1 11.5 1.8 6 6.5 12 11.8 15.2 4.4 2.6 5.5 2.8 18.5 3l13.8.5-.2 19.6-.3 19.7-5.7 8.7c-5.6 8.6-5.8 8.8-9.7 8.8-7 0-13 7.7-11.4 14.6 2.6 10.7 15 14 22 6 4-4 4.5-9.3 1.8-15-1.6-3.2-1.6-3.3 3-10.3 8.2-13 7.6-8.8 7.6-51.8V169h19v94.5l-3 1.7c-9 5-8.4 19 1 22.8 8 3.4 18-2.7 18-11 0-5.3-2.3-9.6-6-11.5l-3-1.6v-95h19v78.5l6 9.4 5.8 9.4-2 2.4c-4.3 5.7-2.8 14.4 3.4 18.2 6.2 3.8 14 2 17.8-4.3 5-8-.6-18.7-9.8-18.7-2.5 0-3.5-1-8.5-9l-5.7-9.2V187h10.8c6.7 0 12.8-.6 15.8-1.5 6.2-1.8 12.4-7 15-12.4 1.7-4 1.7-4 7.3-4 20 0 39-14.3 45-34 7.2-23-4-49-25.7-58.7l-6.2-2.8v-8c0-17-6-30.7-19-43.5-9.7-9.8-17-14-28.6-17-10-2.6-23.3-2.6-33 0zm36.8 8.3c24 9.2 39.4 33 37.5 57.7l-.6 7.6 5 1.3c6 1.4 16 8 20 13 11.4 14.4 13 32 4.5 48-3.3 6-11.4 14-17.3 17-5.2 2.6-14.5 5-19.4 5H208v-15c0-14.7 0-15 2.3-16 6.2-2.3 9.4-10.8 6.3-16.7-5.2-10.2-19.4-9.6-23.5 1-2 5.5 0 11.3 5.3 14.6l3.7 2.3V163h-38V72.5l3-1.7c4-2.3 6.5-6.5 6.4-11.3C173.2 52 168 47 160 47c-3.6 0-5 .6-8 4-3.4 3-4 4.4-4 8 0 5.3 2.2 9.6 6 11.5l3 1.6v91h-19v-4.8c0-4.2.3-4.8 2.8-6 8-3.5 8.2-17.5.2-21.7-6-3-15.2-.8-18 4.7-3.2 5.8-.6 14.4 5 17.4 2.6 1.3 3 2 3 6v4.4h-19v-57.8l2.5-1c5.8-2.7 8.2-12 4.6-17.8-2-3.2-7.3-6.4-11-6.4-4 0-9 2.8-11 6.2-3.8 6.3-2 13.8 4.5 17.8l3.5 2.2V163H67v-6.3c0-6 .2-6.3 3.3-8.2 1.8-1 4-3.6 5-5.6 5-9.3-4.4-20.2-15-17.6-1.4.4-4 2.2-6 4-2.7 2.8-3.3 4.2-3.3 7.5 0 5.3 2.2 9.6 6 11.5 3 1.5 3 1.8 3 8v6.7l-11.8-.4c-10.4-.3-12.6-.7-17.4-3-6.5-3.3-13-10-16-16.6-3.2-6.7-3-19.8 0-26.3 5-10.4 14-17.3 24.7-18.8l4.7-.7V86c.3-10.4.6-12 3-17.3 3.6-7 10.6-14.3 17.3-18 10-5.3 25-5.5 35.4-.4 5.6 3 5.6 3 8.8-5 6.6-16.4 21-29 38.2-33.8 8.8-2.4 26.7-1.5 35.2 1.8zM105 185v16H94.8c-12 0-16.5-1-20.8-4.7-4.8-4-6.3-7.8-6.8-18l-.5-9.3H105v16zm95-15.4c0 1.8-4.7 6.7-8 8.4-3.3 1.7-6 2-16 2h-12v-11h18c10 0 18 .3 18 .6z"/></svg>
                );

            case 'upload':
                return (
                    <svg width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg>
                );

                //Auth Icons
            case 'circle_error':
                return (
                    <svg viewBox="0 0 20 20">
                        <path d="M10,0.982c4.973,0,9.018,4.046,9.018,9.018S14.973,19.018,10,19.018S0.982,14.973,0.982,10
          S5.027,0.982,10,0.982 M10,0C4.477,0,0,4.477,0,10c0,5.523,4.477,10,10,10s10-4.477,10-10C20,4.477,15.523,0,10,0L10,0z M9,5.703
          V5.441h2.5v0.262l-0.66,5.779H9.66L9,5.703z M9.44,12.951h1.621v1.491H9.44V12.951z"/>
                    </svg>
                );
            case 'circle_tick':
                return (
                    <svg viewBox="0 0 23 23">
                        <path d="M11.5,23C5.2,23,0,17.8,0,11.5S5.2,0,11.5,0S23,5.2,23,11.5S17.8,23,11.5,23z M11.5,1C5.7,1,1,5.7,1,11.5S5.7,22,11.5,22
            S22,17.3,22,11.5S17.3,1,11.5,1z M10.4,15.2l6.7-7c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0L10,14.2L7,11
            c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7l3.4,3.5c0.1,0.1,0.2,0.1,0.3,0.1S10.3,15.3,10.4,15.2z"/>
                    </svg>
                );

            case 'circle_tick_filled':
                return (
                    <svg viewBox="0 0 20 20">
                        <path fill="#4FB07F" d="M9.5,0C14.7,0,19,4.3,19,9.5S14.7,19,9.5,19S0,14.7,0,9.5S4.3,0,9.5,0z"/>
                        <path fill="#FFFFFF" d="M8.7,12.9c-0.1,0-0.2,0-0.3-0.1l-2.4-2.5c-0.1-0.1-0.1-0.4,0-0.5c0.1-0.2,0.4-0.2,0.5,0L8.7,12l4.6-5
              c0.1-0.1,0.4-0.1,0.5,0c0.1,0.2,0.1,0.4,0,0.5L9,12.8C9,12.8,8.9,12.9,8.7,12.9C8.8,12.9,8.8,12.9,8.7,12.9z"/>
                    </svg>
                );
            case 'play':
                return (
                  <svg className="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M0 0 L32 16 L0 32 z" />
                  </svg>
                );
          case 'pause':
              return (
                <svg className="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M0 0 H12 V32 H0 z M20 0 H32 V32 H20 z" />
                </svg>
              );
            default:
                return false;
        }
    }
}
Icon.propTypes = {
    type: PropTypes.string.isRequired
};
export default Icon;
