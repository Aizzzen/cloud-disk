import sizeFormat from '../../utils/sizeFormat';

describe('size format values', () => {
    test('file size is n GB', () => {
        expect(sizeFormat(1073741830)).toBe('1.0GB')
    })
    test('file size is n MB', () => {
        expect(sizeFormat(1048580)).toBe('1.0MB')
    })
    test('file size is n KB', () => {
        expect(sizeFormat(1030)).toBe('1.0KB')
    })
    test('file size is n B', () => {
        expect(sizeFormat(100)).toBe('100B')
    })
})
