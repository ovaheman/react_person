import cn from 'classnames';
export const Person = ({ person: { name, age, isMarried, sex, partnerName } }) => (

  <div className="App">
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
      {age > 0 ? (
        <p className='Person__age'>I am {age}</p>
      ) :
        null
      }
      {isMarried === false ? (
        <p className='Person__partner'>I am not married</p>
      ) :
        null}
      {whoIsPartner(sex, partnerName, isMarried)}
  </section>
</div>
);

const whoIsPartner = (sex, partnerName, isMarried) => {
  if (sex === 'm' && isMarried === true) {
    return <p className='Person__partner'>{partnerName} is my wife</p>
  }

  if (sex === 'f' && isMarried === true) {
    return <p className='Person__partner'>{partnerName} is my husband</p>
  }
}

