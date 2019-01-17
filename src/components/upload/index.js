import Vue from 'vue'
import HmScriptUpload from './src/scriptUpload'

const HmScriptUploadConstructor = Vue.extend(HmScriptUpload)

HmScriptUpload.service = (options = {}) => {
	let instance = new HmScriptUploadConstructor({
		data: options
	})
	instance.vm = instance.$mount()
	document.body.appendChild(instance.vm.$el)
	instance.vm.visible = true
}

export default HmScriptUpload
