report({
  testSuite: "BackstopJS",
  tests: [
    {
      pair: {
        reference:
          "../bitmaps_reference/backstop_default_Homepage_0_document_0_phone.png",
        test:
          "../bitmaps_test/20210131-192214/backstop_default_Homepage_0_document_0_phone.png",
        selector: "document",
        fileName: "backstop_default_Homepage_0_document_0_phone.png",
        label: "Homepage",
        misMatchThreshold: 0,
        url: "http://localhost:3000/",
        expect: 0,
        viewportLabel: "phone",
        diff: {
          isSameDimensions: true,
          dimensionDifference: {
            width: 0,
            height: 0,
          },
          misMatchPercentage: "90.77",
          analysisTime: 92,
        },
        diffImage:
          "../bitmaps_test/20210131-192214/failed_diff_backstop_default_Homepage_0_document_0_phone.png",
      },
      status: "fail",
    },
    {
      pair: {
        reference:
          "../bitmaps_reference/backstop_default_Homepage_0_document_1_tablet.png",
        test:
          "../bitmaps_test/20210131-192214/backstop_default_Homepage_0_document_1_tablet.png",
        selector: "document",
        fileName: "backstop_default_Homepage_0_document_1_tablet.png",
        label: "Homepage",
        misMatchThreshold: 0,
        url: "http://localhost:3000/",
        expect: 0,
        viewportLabel: "tablet",
        diff: {
          isSameDimensions: true,
          dimensionDifference: {
            width: 0,
            height: 0,
          },
          misMatchPercentage: "87.03",
          analysisTime: 129,
        },
        diffImage:
          "../bitmaps_test/20210131-192214/failed_diff_backstop_default_Homepage_0_document_1_tablet.png",
      },
      status: "fail",
    },
  ],
  id: "backstop_default",
});
