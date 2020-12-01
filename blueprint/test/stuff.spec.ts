import * as chai from 'chai';

describe( 'Test suite', () =>
{
    let m_testSuiteVariable = null;

    before( () =>
    {
        // Set up tests
        m_testSuiteVariable = 1;
    } );

    it( 'should have the correct value', () =>
    {
        // Test
        expect( m_testSuiteVariable ).to.equal( 1 );
    } );

    after( () =>
    {
        // Tear down tests
        m_testSuiteVariable = null;
    } );
} );