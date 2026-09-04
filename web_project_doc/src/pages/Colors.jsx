import React from 'react'

const colorsData = [
  {
    category: 'color primary',
    color: '#F1703A',
    items: [
      { name: '$color-primary-light || $brand-primary-light', hex: '#F1703A', use: 'use case' },
      { name: '$color-primary-regular || $brand-primary', hex: '#E75113', use: 'use case' },
      { name: '$color-primary-dark || $brand-primary-dark', hex: '#BD3C07', use: 'use case' }
    ]
  },
  {
    category: 'color promo',
    color: '#c7607d',
    items: [
      { name: '$color-promo-light', hex: '#c7607d', use: 'use case' },
      { name: '$color-promo-light', hex: '#FB599A', use: 'use case' },
      { name: '$color-promo-regular || $ui-promo || $ui-promo-light', hex: '#ED0F69', use: 'use case' },
      { name: '$color-promo-dark || $ui-promo-dark', hex: '#C30D56', use: 'use case' }
    ]
  },
  {
    category: 'color success',
    color: '#48C868',
    items: [
      { name: '$color-success-light', hex: '#AEE7BC', use: 'use case' },
      { name: '$color-success-regular || $ui-validation || $ui-validation-light', hex: '#48C868', use: 'use case' },
      { name: '$color-success-dark || $ui-validation-dark', hex: '#33A850', use: 'use case' }
    ]
  },
  {
    category: 'color information',
    color: '#77C3FF',
    items: [
      { name: '$color-information-lighter || $ui-information-lighter', hex: '#c9e5fb', use: 'use case' },
      { name: '$color-information-light || $ui-information-light', hex: '#77C3FF', use: 'use case' },
      { name: '$color-information-regular || $ui-information', hex: '#2BA3FF', use: 'use case' },
      { name: '$color-information-dark || $ui-information-dark', hex: '#3783C2', use: 'use case' }
    ]
  },
  {
    category: 'color danger',
    color: '#FF322B',
    items: [
      { name: '$color-danger-lighter', hex: '#FFEAE9', use: 'use case' },
      { name: '$color-danger-light || $ui-danger-light', hex: '#FF6A65', use: 'use case' },
      { name: '$color-danger-regular || $ui-danger', hex: '#FF322B', use: 'use case' },
      { name: '$color-danger-dark || $ui-danger-dark', hex: '#C23D36', use: 'use case' }
    ]
  },
  {
    category: 'color warning',
    color: '#FFDF3F',
    items: [
      { name: '$color-warning-light || $ui-rate-light', hex: '#FFE878', use: 'use case' },
      { name: '$color-warning-regular || $ui-rate', hex: '#FFDF3F', use: 'use case' },
      { name: '$color-warning-dark || $ui-rate-dark', hex: '#C7A614', use: 'use case' }
    ]
  },
  {
    category: 'color grey',
    color: '#949494',
    items: [
      { name: '$color-grey-lighter || $grey-lighter', hex: '#F4F4F4', use: 'use case' },
      { name: '$color-grey-light || $grey-light', hex: '#E5E5E6', use: 'use case' },
      { name: '$color-grey-regular || $grey || $greys-mid', hex: '#bfc0c1', use: 'use case' },
      { name: '$color-grey-slightly-dark || $grey-regularer', hex: '#949494', use: 'use case' },
      { name: '$color-grey-dark || $grey-dark', hex: '#5C5D5E', use: 'use case' },
      { name: '$color-grey-darker || grey-darker', hex: '#2C2E2F', use: 'use case' }
    ]
  },
  {
    category: 'color primitive',
    color: '#000000',
    items: [
      { name: '$black || $primitive-black', hex: '#000000', use: 'use case' },
      { name: '$white || $primitive-white', hex: '#FFFFFF', use: 'use case' }
    ]
  },
  {
    category: 'color bg WHY?',
    color: '#86c06a',
    items: [
      { name: '$bg-white', hex: '#ffffff', use: 'use case' },
      { name: '$bg-grey', hex: '#dadada', use: 'use case' },
      { name: '$bg-blue', hex: '#488ccb', use: 'use case' },
      { name: '$bg-green', hex: '#86c06a', use: 'use case' },
      { name: '$bg-pink', hex: '#f29fc5', use: 'use case' },
      { name: '$bg-beige', hex: '#f1e5d6', use: 'use case' },
      { name: '$bg-yellow', hex: '#ffed00', use: 'use case' },
      { name: '$bg-brown', hex: '#7f5122', use: 'use case' },
      { name: '$bg-red', hex: '#e30613', use: 'use case' },
      { name: '$bg-orange', hex: '#f28d4f', use: 'use case' },
      { name: '$bg-purple', hex: '#af60a2', use: 'use case' },
      { name: '$bg-black', hex: '#2f2f2f', use: 'use case' },
      { name: '$bg-natural', hex: '#e5dbcf', use: 'use case' }
    ]
  },
  {
    category: 'color unnecessary?',
    color: '#86c06a',
    items: [
      { name: '$pink', hex: 'pink', use: 'use case' },
      { name: '$blue', hex: 'blue', use: 'use case' },
      { name: '$green', hex: 'green', use: 'use case' },
      { name: '$yellow', hex: 'yellow', use: 'use case' },
      { name: '$primary-regular', hex: '#00743a !default', use: 'use case' },
      { name: '$secondary-regular', hex: '#333333 !default', use: 'use case' }
    ]
  }
]

const Colors = () => {
  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex.replace(' !default', ''))
  }

  return (
    <div>
      <h1>Becquet Colors Palette</h1>
      <blockquote>
        Named variables from Next js (React) project cf.{' '}
        <a href="http://srvtfsprod:8080/tfs/WebCollection/_git/becquet-front-site/pullrequests?_a=mine">
          srvtfsprod
        </a>
      </blockquote>

      <table>
        <thead>
          <tr>
            <th>const</th>
            <th>HEXA</th>
            <th>color</th>
            <th>use case</th>
          </tr>
        </thead>
        <tbody>
          {colorsData.map((section, sIndex) => (
            <React.Fragment key={sIndex}>
              <tr>
                <td colSpan="4" align="center" style={{ color: section.color, fontWeight: 'bold' }}>
                  {section.category}
                </td>
              </tr>
              {section.items.map((item, iIndex) => (
                <tr key={`${sIndex}-${iIndex}`}>
                  <td>{item.name}</td>
                  <td 
                    onClick={() => copyToClipboard(item.hex)}
                    style={{ cursor: 'pointer', textDecoration: 'underline dotted' }}
                    title="Cliquer pour copier"
                  >
                    {item.hex}
                  </td>
                  <td style={{ backgroundColor: item.hex.replace(' !default', ''), minWidth: '60px' }}></td>
                  <td>{item.use}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <h2>NB</h2>
      <blockquote>
        TODO utiliser des noms unique par couleurs, ex: pour $color-success-regular || $ui-validation || $ui-validation-light il ne faut garder que $color-success-regular qui semble suffisamment expressif pour ne pas la confondre avec une autre couleur.
      </blockquote>
    </div>
  )
}

export default Colors
