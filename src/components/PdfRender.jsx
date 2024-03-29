import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';

/* Font.register({
  family: 'Calibri',
  fonts: [
    { src: '/src/fonts/cbold.ttf', fontWeight: 'bold' },
    {
      src: '/src/fonts/citalic.ttf',
      fontStyle: 'italic',
    },
    {
      src: '/src/fonts/clight.ttf',
      fontWeight: 'light',
    },
  ],
});

const styles = StyleSheet.create({
  boldText: {
    fontFamily: 'Calibri',
    fontWeight: 'bold',
  },
  italicText: {
    fontFamily: 'Calibri',
    fontStyle: 'italic',
  },
  lightText: {
    fontFamily: 'Calibri',
    fontWeight: 'light',
  },
}); */

const MyDocument = ({ personalInfo, experiences, skills, schools }) => (
  <Document>
    <Page size={'A4'}>
      <View style={{ paddingLeft: 48, paddingRight: 48, paddingTop: 24 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
            fontSize: 12,
          }}
        >
          {/* top section */}
          <View>
            <Text style={{ fontSize: 30, lineHeight: 0 }}>{personalInfo?.fullName}</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '4px',
              fontSize: 10,
            }}
          >
            <Text>{personalInfo?.address}</Text>
            <Text>•</Text>
            <Text>{personalInfo?.email}</Text>
            <Text>•</Text>
            <Text>{personalInfo?.tel}</Text>
            <Text>•</Text>
            <Text>{personalInfo?.social || 'www.linkedin.com/in/duhanozarslan'}</Text>
          </View>
        </View>
        {/* top section end */}

        {/* experience */}
        <View style={{ marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 13,
              textTransform: 'uppercase',
              borderBottom: 1,
              borderColor: 'black',
              marginBottom: 10,
            }}
            // className='text-xl uppercase border-b border-black mb-2'
          >
            Experience
          </Text>
          {experiences.map((exp, index) => (
            <View style={{ paddingLeft: 8, paddingRight: 8, fontSize: 12, marginBottom: 12 }} key={index}>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                <View>
                  <Text>{exp?.companyName}</Text>
                  <Text>{exp?.positionTitle}</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <Text>{exp?.location}</Text>
                  <View style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <Text>{exp?.startDate}</Text> <Text>/</Text> <Text>{exp?.endDate}</Text>
                  </View>
                </View>
              </View>
              <View>
                <Text>{exp?.description}</Text>
              </View>
              <View style={{ marginBottom: 8 }}>
                {exp?.details.map((exp, index) => (
                  <View key={index} style={{ flexDirection: 'row', alignItems: 'top', marginTop: 4 }}>
                    <Text style={{ width: 10, textAlign: 'left' }}>•</Text> {/* Bullet point symbol */}
                    <Text style={{ flex: 1, textAlign: 'left', marginLeft: 5 }}>{exp}</Text> {/* List item text */}
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View className='mb-4' style={{ marginBottom: 16 }}>
          <Text
            style={{
              fontSize: 13,
              textTransform: 'uppercase',
              borderBottom: 1,
              borderColor: 'black',
              marginBottom: 10,
            }}
            className='text-xl uppercase border-b border-black mb-2'
          >
            Skills
          </Text>
          {skills.map((skill, index) => (
            <View className='px-4' style={{ paddingLeft: 8, paddingRight: 8, fontSize: 12 }} key={index}>
              <View className='flex items-center gap-2' style={{ display: 'flex', flexDirection: 'row' }}>
                <Text className='w-24' style={{ width: 96 }}>
                  Languages:
                </Text>
                <Text>{skill?.languages}</Text>
              </View>
              <View className='flex items-center gap-2' style={{ display: 'flex', flexDirection: 'row' }}>
                <Text className='w-24' style={{ width: 96 }}>
                  Frameworks:
                </Text>
                <Text>{skill?.frameworks}</Text>
              </View>
              <View className='flex items-center gap-2' style={{ display: 'flex', flexDirection: 'row' }}>
                <Text className='w-24' style={{ width: 96 }}>
                  Databases:
                </Text>
                <Text>{skill?.database}</Text>
              </View>
              <View className='flex items-center gap-2' style={{ display: 'flex', flexDirection: 'row' }}>
                <Text className='w-24' style={{ width: 96 }}>
                  API:
                </Text>
                <Text>{skill?.api}</Text>
              </View>
              <View className='flex items-center gap-2' style={{ display: 'flex', flexDirection: 'row' }}>
                <Text className='w-24' style={{ width: 96 }}>
                  Tools:
                </Text>
                <Text>{skill?.tools}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* show education  */}
        <View>
          <Text
            style={{
              fontSize: 13,
              textTransform: 'uppercase',
              borderBottom: 1,
              borderColor: 'black',
              marginBottom: 10,
            }}
            className='text-xl uppercase border-b border-black mb-2'
          >
            Education
          </Text>
          {schools?.map((school, index) => (
            <View style={{ paddingLeft: 8, paddingRight: 8, fontSize: 12 }} className='px-4 mb-4' key={index}>
              <View
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}
                className='flex gap-2'
              >
                <View>
                  <Text style={{ fontWeight: 'bold' }} className='font-semibold'>
                    {school?.school}
                  </Text>
                  <Text className='italic'>{school?.degree}</Text>
                </View>

                <View
                  style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}
                  className='flex flex-col  gap-1'
                >
                  <Text>{school?.location}</Text>
                  <View style={{ display: 'flex', flexDirection: 'row', gap: 4 }} className='flex gap-1'>
                    <Text>{school?.startDate}</Text> <Text>/</Text> <Text>{school?.endDate}</Text>
                  </View>
                </View>
              </View>

              <Text style={{ padding: 4 }} className='p-1'>
                {school?.description}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export const PdfRender = ({ personalInfo, experiences, skills, schools }) => {
  return (
    <div className='bg-blue-500 w-fit px-4 py-2 rounded text-white'>
      <PDFDownloadLink
        document={
          <MyDocument personalInfo={personalInfo} schools={schools} experiences={experiences} skills={skills} />
        }
        fileName='user-details.pdf'
      >
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Pdf now!')}
      </PDFDownloadLink>
    </div>
  );
};
