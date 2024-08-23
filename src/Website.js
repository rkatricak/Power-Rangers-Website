import {useEffect, useState} from "react";

export default function Team() {

    // Set State for CoreColor data
    const [coreColors, setCoreColors] = useState([])
    const [extraColors, setExtraColors] = useState([])

    useEffect(() => {

      // Fetch the CoreColor Data related to the logged in User
      fetch(`http://127.0.0.1:8000/corerangers/`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
      })
      .then(res => res.json())
      .then(data => {
        setCoreColors(data)
        });
  }, []);

  useEffect(() => {

    // Fetch the ExtraColor Data related to the logged in User
    fetch(`http://127.0.0.1:8000/extrarangers/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => {
      setExtraColors(data)
      });
}, []);

    const coreColorList = Array(coreColors.length).fill(null);
    const extraColorList = Array(extraColors.length).fill(null);

    const coreList = coreColorList.map((colors, ranger) => {
      if (coreColors.length) {
        let colorDesc = coreColors[ranger].name + " " + coreColors[ranger].color;
        return (
          <div key={ranger}>
              {colorDesc}
          </div>
        );
      }
    });

    const extraList = extraColorList.map((colors, ranger) => {
      if (extraColors.length) {
        let colorDesc = extraColors[ranger].name + " " + extraColors[ranger].color;
        return (
          <div key={ranger}>
              {colorDesc}
          </div>
        );
      }
    });

    return (
    <>
      <h1 className="core">Your Core Team: </h1>
      <div className="members">{coreList}</div>
      <h1 className="extra">Your Extra Rangers: </h1>
      <div className="members">{extraList}</div>
    </>
    );
}