module.exports = {
  someSidebar: {
    "Help Site": [
      'product-overview',
      {
        type: 'category',
        label: 'Getting Started',
        items: [
          'login',
          {
            type: 'category',
            label: 'Sample Runs',
            items: ['post-sample', 'profile-sample',],
          },
        ],
      },
      {
        type: 'category',
        label: 'Modes of Operation',
        items: ['profile-customization', 'search', 'create-post', 'report-issue'],
      },
      'tutorial',
    ],
  },
};
