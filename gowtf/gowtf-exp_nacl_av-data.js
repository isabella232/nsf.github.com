var gowtfData = {"index":"index.html","html":"<p>\u000aPackage av implements audio and video access for Native Client\u000abinaries running standalone or embedded in a web browser window.\u000a</p>\u000a<p>\u000aThe C version of the API is documented at\u000a<a href=\"http://nativeclient.googlecode.com/svn/data/docs_tarball/nacl/googleclient/native_client/scons-out/doc/html/group__audio__video.html\">http://nativeclient.googlecode.com/svn/data/docs_tarball/nacl/googleclient/native_client/scons-out/doc/html/group__audio__video.html</a>\u000a</p>\u000a","name":"av","filenames":["/home/nsf/go/src/pkg/exp/nacl/av/event.go","/home/nsf/go/src/pkg/exp/nacl/av/image.go","/home/nsf/go/src/pkg/exp/nacl/av/av.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Color!\">Color</a></h2>\u000a<pre>type Color uint32</pre>\u000a<p>\u000aA Color represents a Native Client color value,\u000aa 32-bit R, G, B, A value packed as 0xAARRGGBB.\u000a</p>\u000a\u000a","name":"Color","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Color\">func (Color)</a> <a href=\"?m:Color.RGBA!\">RGBA</a></h2>\u000a<code>func (p Color) RGBA() (r, g, b, a uint32)</code>\u000a\u000a","name":"RGBA"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Image!\">Image</a></h2>\u000a<pre>type Image struct {\u000a\u0009Linear []Color\u000a\u0009Pixel  [][]Color\u000a}</pre>\u000a<p>\u000aAn Image represents a Native Client frame buffer.\u000aThe pixels in the image can be accessed as a single\u000alinear slice or as a two-dimensional slice of slices.\u000aImage implements image.Image.\u000a</p>\u000a\u000a","name":"Image","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Image\">func (*Image)</a> <a href=\"?m:Image.At!\">At</a></h2>\u000a<code>func (m *Image) At(x, y int) image.Color</code>\u000a\u000a","name":"At"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Image\">func (*Image)</a> <a href=\"?m:Image.Bounds!\">Bounds</a></h2>\u000a<code>func (m *Image) Bounds() image.Rectangle</code>\u000a\u000a","name":"Bounds"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Image\">func (*Image)</a> <a href=\"?m:Image.ColorModel!\">ColorModel</a></h2>\u000a<code>func (m *Image) ColorModel() image.ColorModel</code>\u000a\u000a","name":"ColorModel"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Image\">func (*Image)</a> <a href=\"?m:Image.Set!\">Set</a></h2>\u000a<code>func (m *Image) Set(x, y int, color image.Color)</code>\u000a\u000a","name":"Set"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Window!\">Window</a></h2>\u000a<pre>type Window struct {\u000a\u0009Embedded bool // running as part of a web page?\u000a\u0009*Image        // screen image\u000a\u0009eventc   chan interface{}\u000a}</pre>\u000a<p>\u000aA Window represents a connection to the Native Client window.\u000aIt implements draw.Context.\u000a</p>\u000a\u000a","name":"Window","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Window\">func (*Window)</a> <a href=\"?m:Window.Close!\">Close</a></h2>\u000a<code>func (w *Window) Close() os.Error</code>\u000a\u000a","name":"Close"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Window\">func (*Window)</a> <a href=\"?m:Window.EventChan!\">EventChan</a></h2>\u000a<code>func (w *Window) EventChan() &lt;-chan interface{}</code>\u000a\u000a","name":"EventChan"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Window\">func (*Window)</a> <a href=\"?m:Window.FlushImage!\">FlushImage</a></h2>\u000a<code>func (w *Window) FlushImage()</code>\u000a\u000a","name":"FlushImage"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Window\">func (*Window)</a> <a href=\"?m:Window.Screen!\">Screen</a></h2>\u000a<code>func (w *Window) Screen() draw.Image</code>\u000a\u000a","name":"Screen"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:AudioStream!\">AudioStream</a></h2>\u000a<code>func AudioStream(data []uint16) (nextSize int, err os.Error)</code>\u000a<p>\u000aAudioStream provides access to the audio device.\u000aEach call to AudioStream writes the given data,\u000awhich should be a slice of 16-bit stereo PCM audio samples,\u000aand returns the number of samples required by the next\u000acall to AudioStream.\u000a</p>\u000a<p>\u000aTo find out the initial number of samples to write, call AudioStream(nil).\u000a</p>\u000a\u000a","name":"AudioStream"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Init!\">Init</a></h2>\u000a<code>func Init(subsys int, dx, dy int) (*Window, os.Error)</code>\u000a<p>\u000aInit initializes the Native Client subsystems specified by subsys.\u000aInit must be called before using any of the other functions\u000ain this package, and it must be called only once.\u000a</p>\u000a<p>\u000aIf the SubsystemVideo flag is set, Init requests a window of size dx×dy.\u000aWhen embedded in a web page, the web page&#39;s window specification\u000aoverrides the parameters to Init, so the returned Window may have\u000aa different size than requested.\u000a</p>\u000a<p>\u000aIf the SubsystemAudio flag is set, Init requests a connection to the\u000aaudio device carrying 44 kHz 16-bit stereo PCM audio samples.\u000a</p>\u000a\u000a","name":"Init"}],"consts":[{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:SubsystemVideo!\"><em>group</em></a></h2>\u000a<pre>const (\u000a\u0009SubsystemVideo = 1 &lt;&lt; iota\u000a\u0009SubsystemAudio\u000a\u0009SubsystemEmbed\u000a)</pre>\u000a<p>\u000aSubsystem values for Init.\u000a</p>\u000a\u000a","names":["SubsystemVideo","SubsystemAudio","SubsystemEmbed"],"type":""},{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:AudioFormatStereo44K!\"><em>group</em></a></h2>\u000a<pre>const (\u000a\u0009AudioFormatStereo44K = iota\u000a\u0009AudioFormatStereo48K\u000a)</pre>\u000a<p>\u000aAudio formats.\u000a</p>\u000a\u000a","names":["AudioFormatStereo44K","AudioFormatStereo48K"],"type":""}],"vars":[{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:ColorModel!\">ColorModel</a></h2>\u000a<pre>var ColorModel = image.ColorModelFunc(toColor)</pre>\u000a<p>\u000aColorModel is the color model corresponding to the Native Client Color.\u000a</p>\u000a\u000a","names":["ColorModel"],"type":""}]}