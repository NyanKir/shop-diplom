export const state = () => ({
  links: {
    0: {
      name: 'Structural',
      href: 'shop/structural',
      child: {
        0: {
          name: 'Fired Bricks',
          href: 'shop/refractory',
          child: {
            0: {

              name: 'Silicon Carbide',
              href: 'shop/1'

            },
            1: {
              name: 'Titanium Carbide',
              href: 'shop/2'

            },
            2: {
              name: 'Tungsten Carbide',
              href: 'shop/3'

            }
          }
        },
        1: {
          name: 'Carbon',
          href: 'shop/refractory'

        },
        2: {
          name: 'Silicon',
          href: 'shop/refractory'

        }
      }
    },
    1: {
      name: 'Refractory',
      href: 'shop/refractory'

    },
    2: {
      name: 'Electrical',
      href: 'shop/electrical'

    },
    3: {
      name: 'Magnetic',
      href: 'shop/magnetic'

    },
    4: {
      name: 'Abrasives',
      href: 'shop/abrasives'
    }
  }
})
