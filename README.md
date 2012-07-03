##Decouple.js

Under development. Just a sample for proof of concept now.

Loose couple you modules for building single page application.
No more caring about order how to include js modules.
No more caring about init order of modules.
You code will work well anyway.

## Libs used
jQuery
UnderscoreJS
BackboneJS
myClass

## Patterns used

For cross module communications used Mediator pattern.
Each module do not know interface of any other module or its name/namespace. But it know what events of Mediator to listen to.
Module can be referenced true onInit event, but it will brake interface decoupling.

## TODO
Find the best way to call function from another module and recieve results.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.