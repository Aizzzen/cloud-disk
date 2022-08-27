import {
    currentDir,
    currentUser,
    dirStack, files,
    filesUpload,
    fileView,
    isAuth, isVisible,
    loader,
    popupDisplay
} from '../../../store/selectors/selectors';

describe('testing selectors', () => {

    // isAuth
    test('isAuth selector work with empty state', () => {
        expect(isAuth({})).toBe(false)
    })
    test('isAuth selector work with filled state', () => {
        expect(isAuth({
            user: {
                isAuth: true
            }
        })).toBe(true)
    })

    // currentUser
    test('currentUser selector work with empty state', () => {
        expect(currentUser({})).toStrictEqual({})
    })
    test('currentUser selector work with filled state', () => {
        expect(currentUser({
            user: {
                currentUser: {
                    email: 'user@mail.ru',
                    password: '123456'
                }
            }
        })).toStrictEqual({
            email: 'user@mail.ru',
            password: '123456'
        })
    })

    // loader
    test('loader selector work with empty state', () => {
        expect(loader({})).toBe(false)
    })
    test('loader selector work with filled state', () => {
        expect(loader({
            app: {
                loader: true
            }
        })).toBe(true)
    })

    // currentDir
    test('currentDir selector work with empty state', () => {
        expect(currentDir({})).toBe(null)
    })
    test('currentDir selector work with filled state', () => {
        expect(currentDir({
            file: {
                currentDir: 34
            }
        })).toBe(34)
    })

    // popupDisplay
    test('popupDisplay selector work with empty state', () => {
        expect(popupDisplay({})).toBe('none')
    })
    test('popupDisplay selector work with filled state', () => {
        expect(popupDisplay({
            file: {
                popupDisplay: 'flex'
            }
        })).toBe('flex')
    })

    // dirStack
    test('dirStack selector work with empty state', () => {
        expect(dirStack({})).toStrictEqual([])
    })
    test('dirStack selector work with filled state', () => {
        expect(dirStack({
            file: {
                dirStack: [33, 24, 45, 74]
            }
        })).toStrictEqual([33, 24, 45, 74])
    })

    // fileView
    test('fileView selector work with empty state', () => {
        expect(fileView({})).toBe('list')
    })
    test('fileView selector work with filled state', () => {
        expect(fileView({
            file: {
                view: 'plate'
            }
        })).toBe('plate')
    })

    // isVisible
    test('isVisible selector work with empty state', () => {
        expect(isVisible({})).toBe(false)
    })
    test('isVisible selector work with filled state', () => {
        expect(isVisible({
            upload: {
                isVisible: true
            }
        })).toBe(true)
    })

    // filesUpload
    test('filesUpload selector work with empty state', () => {
        expect(filesUpload({})).toStrictEqual([])
    })
    test('filesUpload selector work with filled state', () => {
        expect(filesUpload({
            upload: {
                files: [
                    { id: 1, name: 'Music', type: 'dir' }
                ]
            }
        })).toStrictEqual([
            { id: 1, name: 'Music', type: 'dir' }
        ])
    })

    // files
    test('files selector work with empty state', () => {
        expect(files({})).toStrictEqual([])
    })
    test('files selector work with filled state', () => {
        expect(files({
            file: {
                files: [
                    { id: 1, name: 'Music', type: 'dir' }
                ]
            }
        })).toStrictEqual([
            { id: 1, name: 'Music', type: 'dir' }
        ])
    })

})
