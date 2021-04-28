module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/basis',
        'introduction/resources',
        'introduction/workflow',
        'introduction/contributing',
        'introduction/setting_up_a_development_environment',

        // Uncomment in development environment if you would like to view tutorial
        // Might break somethings though...
        // 'tutorial/getting-started',
        // 'tutorial/create-a-page',
        // 'tutorial/create-a-document',
        // 'tutorial/create-a-blog-post',
        // 'tutorial/markdown-features',
        // 'tutorial/thank-you',
      ],
    },
    {
      type: 'category',
      label: 'GammaDocs',
      items: [
        'gammadocs/roomserver/userserver-configuration-options'
      ]
    },
    {
      type: 'category',
      label: 'WorldServer Protocol',
      items: [
        // 'worldserver-protocol/'
        'worldserver-protocol/packet-information',
        'worldserver-protocol/network-constants',
        'worldserver-protocol/roomserver',
        'worldserver-protocol/userserver'
      ]
    },
    {
      type: 'category',
      label: 'worlds.jar',
      items: [
        {
          type: 'category',
          label: 'NET.worlds',
          items: [
            {
              type: 'category',
              label: 'network',
              items: [
                'worlds-jar/net-worlds/network/objid',
                'worlds-jar/net-worlds/network/serveroutputstream',
                'worlds-jar/net-worlds/network/netconst',
                'worlds-jar/net-worlds/network/netpacket'
              ]
            }
          ]
        }

      ]
    }
  ],
};
