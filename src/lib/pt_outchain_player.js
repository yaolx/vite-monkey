;(function () {
  let c3x = NEJ.P,
    bd3x = NEJ.O,
    a3x = c3x('nej.e'),
    h3x = c3x('nej.v'),
    j3x = c3x('nej.u'),
    t3x = c3x('nej.j'),
    G3x = c3x('nej.ut'),
    dU4Y = c3x('nm.u'),
    b3x,
    L3x
  dU4Y.MY8Q = NEJ.C()
  b3x = dU4Y.MY8Q.M3x(G3x.cP4T)
  b3x.cz4D = function () {
    this.cD4H()
    a3x.sN9E({
      src: location.protocol + '//music.163.com/style/swf/CloudMusicPlayer.swf?v=2014060988888',
      hidden: true,
      parent: document.body,
      params: {
        flashvars: 'hostname=' + location.hostname,
        allowscriptaccess: 'always',
        wmode: 'transparent'
      },
      onready: this.Ua0x.f3x(this)
    })
    window.onIoError = this.Ai1x.f3x(this)
    window.onLoadProgress = this.Ab1x.f3x(this)
    window.onPlayProgress = this.wO0x.f3x(this)
    window.onPlayComplete = this.ccy8q.f3x(this)
  }
  b3x.bC3x = function () {
    this.xu0x()
    this.cQo3x()
  }
  b3x.Ua0x = function (in6h) {
    this.by3x = in6h
    if (typeof console === 'undefined') {
      console = {}
    }
    console.aslog = this.cdp6j.f3x(this)
    this.ni7b(this.cds6m)
    this.ey4C(this.jG6A)
  }
  b3x.cdp6j = function (bB3x) {
    this.by3x.as_postMessage(bB3x)
  }
  b3x.xu0x = function () {
    delete this.jG6A
    if (this.by3x) {
      this.by3x.as_stop()
      this.by3x.as_clear()
    }
  }
  b3x.Ai1x = function (cc4g) {
    this.z3x('onplayerror', { name: 'ioerror', code: cc4g })
  }
  b3x.Ab1x = function (py8q, cH4L) {
    if (this.gR5W < 1) return
    this.z3x('onloadprogress', { loaded: py8q / 1e3, duration: cH4L / 1e3 })
  }
  b3x.wO0x = function (cel7e, cH4L) {
    this.gR5W = cH4L
    this.z3x('onplayprogress', { current: cel7e / 1e3, duration: cH4L / 1e3 })
  }
  b3x.ccy8q = function (i3x) {
    this.z3x('onstatechange', { state: 4 })
  }
  b3x.ey4C = function (da4e, Dn2x, pu8m, TO9F) {
    this.xu0x()
    if (Dn2x > 0) {
      if (TO9F) {
        t3x.be3x('/api/song/enhance/dj/audition/url', {
          type: 'json',
          query: { id: Dn2x, br: 192e3 },
          onload: function (ig6a) {
            if (ig6a && ig6a.data && ig6a.data.url) {
              doPlay.call(this, ig6a.data.url)
            }
          }.f3x(this)
        })
      } else {
        t3x.be3x('/api/song/enhance/player/url', {
          type: 'json',
          query: { ids: JSON.stringify([Dn2x]), br: 128e3 },
          onload: function (ig6a) {
            if (ig6a.code == 200 && ig6a.data && ig6a.data.length) {
              let bw3x = ig6a.data[0]
              if (bw3x.url) {
                doPlay.call(this, bw3x.url)
              }
            }
          }.f3x(this)
        })
      }
    } else {
      doPlay.call(this, da4e)
    }
    function doPlay(da4e) {
      if (!da4e) return
      this.jG6A = da4e
      this.gR5W = 0
      if (this.by3x) {
        this.by3x.as_addSong({ id: Dn2x, url: this.jG6A })
        if (pu8m === undefined) pu8m = true
        if (pu8m) {
          this.by3x.as_play()
          this.z3x('onstatechange', { state: 1 })
        }
      }
    }
  }
  b3x.fL5Q = function () {
    if (this.by3x && this.jG6A) {
      this.by3x.as_pause()
      this.z3x('onstatechange', { state: 2 })
    }
  }
  b3x.oZ8R = function () {
    if (this.by3x && this.jG6A) {
      this.by3x.as_play()
      this.z3x('onstatechange', { state: 1 })
    }
  }
  b3x.bh3x = function () {
    this.xu0x()
    this.z3x('onstatechange', { state: 3 })
  }
  b3x.pZ8R = function (fx5C) {
    if (!this.by3x || !this.jG6A) return
    this.by3x.as_setPosition(this.gR5W * fx5C)
    this.by3x.currentTime = this.by3x.duration * fx5C
  }
  b3x.HV6P = function (TH9y) {
    if (this.by3x) this.by3x.as_setMuted(!!TH9y)
    this.z3x('onmutedchange', { muted: TH9y })
  }
  b3x.ni7b = function (D3x) {
    this.cds6m = D3x
    if (this.by3x) this.by3x.as_setVolume(D3x)
    this.z3x('onvolumechange', { value: D3x })
  }
  b3x.ue0x = function () {
    return this.by3x && this.by3x.as_isPlaying()
  }
})()
;(function () {
  let c3x = NEJ.P,
    bd3x = NEJ.O,
    a3x = c3x('nej.e'),
    t3x = c3x('nej.j'),
    h3x = c3x('nej.v'),
    j3x = c3x('nej.u'),
    G3x = c3x('nej.ut'),
    dU4Y = c3x('nm.u'),
    b3x,
    L3x
  function ceF7y(Y3x) {
    return (Y3x || '').replace(/^https?:/, '')
  }
  dU4Y.TF9w = NEJ.C()
  b3x = dU4Y.TF9w.M3x(G3x.cP4T)
  b3x.cz4D = (function () {
    let bzH3x = function (Z3x) {
      h3x.s3x(this.by3x, Z3x, this.ceJ7C.f3x(this, Z3x))
    }
    return function () {
      this.cD4H()
      this.by3x = new Audio()
      this.mI7B = ['play', 'pause', 'ended', 'playing', 'progress', 'loadeddata', 'timeupdate', 'error', 'emptied']
      j3x.bg3x(this.mI7B, bzH3x, this)
      this.bjQ1x = 0
      this.TD9u = 0
    }
  })()
  b3x.bC3x = function () {
    this.xu0x()
    this.bH4L()
  }
  b3x.xu0x = function () {
    if (!this.by3x.currentSrc) return
    this.bcy1x()
    try {
      this.by3x.currentTime = 0
    } catch (e) {}
    this.by3x.pause()
    this.by3x.src = ''
  }
  b3x.ceJ7C = function (Z3x) {
    switch (Z3x) {
      case 'play':
      case 'loadeddata':
        if (Z3x == 'loadeddata') this.bcy1x()
        this.z3x('onstatechange', { state: 0 })
        break
      case 'pause':
        this.z3x('onstatechange', { state: 2 })
        break
      case 'ended':
        this.z3x('onstatechange', { state: 4 })
        break
      case 'playing':
        this.z3x('onstatechange', { state: 1 })
        break
      case 'progress':
        if (!this.by3x.buffered.length) return
        var a3x = this.by3x.buffered.end(0)
        this.z3x('onloadprogress', { loaded: a3x, duration: this.by3x.duration })
        break
      case 'timeupdate':
        this.z3x('onplayprogress', { current: this.by3x.currentTime, duration: this.by3x.duration })
        break
      case 'emptied':
        break
      case 'error':
        var cc4g = this.by3x.error,
          bS4W = this.by3x.currentSrc,
          bcx1x = this.by3x.currentTime
        if (cc4g) {
          switch (cc4g.code) {
            case cc4g.MEDIA_ERR_ABORTED:
            case cc4g.MEDIA_ERR_DECODE:
            case cc4g.MEDIA_ERR_ENCRYPTED:
              this.z3x('onplayerror', { error: cc4g.code, src: bS4W, time: bcx1x })
              break
            case cc4g.MEDIA_ERR_NETWORK:
              this.bjT1x(bS4W, bcx1x)
              break
            case cc4g.MEDIA_ERR_SRC_NOT_SUPPORTED:
              if (!!this.by3x.src && this.by3x.src != location.protocol + '//' + location.host + '/' && this.by3x.src.indexOf('#') < 0) {
                this.z3x('onplayerror', { error: cc4g.code, src: bS4W, time: bcx1x })
              }
              break
            default:
              this.z3x('onplayerror', { error: -1, src: bS4W, time: bcx1x })
              break
          }
        }
        break
    }
  }
  b3x.ey4C = function (da4e, Dn2x, pu8m, TO9F) {
    this.bcy1x()
    if (Dn2x > 0) {
      if (TO9F) {
        t3x.be3x('/api/song/enhance/dj/audition/url', {
          type: 'json',
          query: { id: Dn2x, br: 192e3 },
          onload: function (ig6a) {
            if (ig6a && ig6a.data && ig6a.data.url) {
              doPlay.call(this, ig6a.data.url)
            }
          }.f3x(this)
        })
      } else {
        t3x.be3x('/api/song/enhance/player/url', {
          type: 'json',
          query: { ids: JSON.stringify([Dn2x]), br: 128e3 },
          onload: function (ig6a) {
            if (ig6a.code == 200 && ig6a.data && ig6a.data.length) {
              let bw3x = ig6a.data[0]
              if (bw3x.url) {
                doPlay.call(this, bw3x.url)
              }
            }
          }.f3x(this)
        })
      }
    } else {
      doPlay.call(this, da4e)
    }
    function doPlay(da4e) {
      this.by3x.src = ceF7y(da4e)
      if (pu8m === undefined) pu8m = true
      if (pu8m) {
        this.by3x.play()
      }
    }
  }
  b3x.bcy1x = function () {
    this.TD9u = 0
    this.bjQ1x = clearTimeout(this.bjQ1x)
  }
  b3x.bjT1x = function (da4e, bjU1x) {
    if (!da4e || this.TD9u > 5) {
      if (this.TD9u > 5) this.z3x('onplayerror', { error: 2, src: da4e, time: bjU1x })
      this.bcy1x()
      return
    }
    if (this.TD9u > 0) {
      let r3x = da4e.indexOf('#')
      da4e = r3x >= 0 ? da4e.substring(0, r3x) : da4e
      this.by3x.src = da4e + '#t=' + bjU1x
      this.by3x.play()
    }
    this.TD9u++
    this.bjQ1x = setTimeout(arguments.callee.f3x(this, da4e, bjU1x), 5e3)
  }
  b3x.fL5Q = function () {
    console.log('###player_pause', window.yaolxPlayer)
    if (!window.yaolxPlayer) {
      window.yaolxPlayer = this.by3x
    }
    this.by3x.pause()
  }
  b3x.oZ8R = function () {
    console.log('###player_play', window.yaolxPlayer)
    if (!window.yaolxPlayer) {
      window.yaolxPlayer = this.by3x
    }
    this.by3x.play()
  }
  b3x.bh3x = function () {
    this.xu0x()
    this.z3x('onstatechange', { state: 3 })
  }
  b3x.pZ8R = function (fx5C) {
    if (!this.by3x.currentSrc) return
    this.by3x.currentTime = this.by3x.duration * fx5C
  }
  b3x.HV6P = function (TH9y) {
    this.by3x.muted = !!TH9y
    this.z3x('onmutedchange', { muted: TH9y })
  }
  b3x.ni7b = function (D3x) {
    this.by3x.volume = D3x
    this.z3x('onvolumechange', { value: D3x })
  }
  b3x.ue0x = function () {
    return this.by3x.currentTime > 0 && !this.by3x.ended && !this.by3x.paused
  }
})()
;(function () {
  let c3x = NEJ.P,
    bd3x = NEJ.O,
    fG5L = NEJ.R,
    a3x = c3x('nej.e'),
    h3x = c3x('nej.v'),
    P3x = c3x('nej.ut'),
    CW2x
  if (P3x.bdA2x) return
  P3x.bdA2x = NEJ.C()
  CW2x = P3x.bdA2x.M3x(P3x.cP4T)
  CW2x.cz4D = function () {
    this.lo7h = { onchange: this.gq5v.f3x(this), ondragend: this.gq5v.eM5R(this, !0) }
    this.cD4H()
  }
  CW2x.bo3x = function (e3x) {
    this.bp3x(e3x)
    this.lo7h.view = a3x.A3x(e3x.track)
    this.lo7h.body = a3x.A3x(e3x.slide)
    this.lo7h.mbar = this.lo7h.view
    this.xc0x(e3x.range)
    this.bZ4d([[this.lo7h.view, 'mousedown', this.coi8a.f3x(this)]])
    this.jm6g = P3x.xH1x.B3x(this.lo7h)
  }
  CW2x.bC3x = function () {
    this.bH4L()
    this.jm6g.V3x()
    delete this.jm6g
    delete this.iC6w
    delete this.lo7h.view
    delete this.lo7h.body
    delete this.lo7h.mbar
  }
  CW2x.gq5v = function (d3x, gj5o) {
    let bCT4X = d3x.left / this.iC6w.x[1],
      bCX4b = d3x.top / this.iC6w.y[1],
      bDb4f = this.iC6w.x,
      bDd4h = this.iC6w.y
    this.z3x('onchange', {
      stopped: !!gj5o,
      x: { rate: bCT4X, value: bCT4X * (bDb4f[1] - bDb4f[0]) },
      y: { rate: bCX4b, value: bCX4b * (bDd4h[1] - bDd4h[0]) }
    })
  }
  CW2x.coi8a = function (d3x) {
    let bn3x = a3x.iy6s(this.lo7h.view),
      bDe4i = { x: h3x.kf6Z(d3x), y: h3x.mP7I(d3x) },
      dB4F = {
        x: Math.floor(this.lo7h.body.offsetWidth / 2),
        y: Math.floor(this.lo7h.body.offsetHeight / 2)
      }
    this.jm6g.hj5o({ top: bDe4i.y - bn3x.y - dB4F.y, left: bDe4i.x - bn3x.x - dB4F.x })
  }
  CW2x.xc0x = function (dp4t) {
    let sT9K
    if (this.iC6w) {
      let oT8L = this.jm6g.byJ3x()
      sT9K = { x: oT8L.left / this.iC6w.x[1], y: oT8L.top / this.iC6w.y[1] }
    }
    dp4t = dp4t || bd3x
    let coB8t = (dp4t.x || fG5L)[1] || this.lo7h.view.clientWidth - this.lo7h.body.offsetWidth,
      coC8u = (dp4t.y || fG5L)[1] || this.lo7h.view.clientHeight - this.lo7h.body.offsetHeight
    this.iC6w = { x: dp4t.x || [0, coB8t], y: dp4t.y || [0, coC8u] }
    if (sT9K) this.hj5o(sT9K)
    return this
  }
  CW2x.hj5o = function (sT9K) {
    sT9K = sT9K || bd3x
    this.jm6g.hj5o({ top: this.iC6w.y[1] * (sT9K.y || 0), left: this.iC6w.x[1] * (sT9K.x || 0) })
  }
})()
;(function () {
  let P3x = NEJ.P('nej.ut'),
    bDi4m
  if (P3x.MS8K) return
  P3x.MS8K = NEJ.C()
  bDi4m = P3x.MS8K.M3x(P3x.bdA2x)
  bDi4m.cz4D = function () {
    this.cD4H()
    this.lo7h.direction = 2
  }
})()
;(function () {
  let c3x = NEJ.P,
    a3x = c3x('nej.e'),
    h3x = c3x('nej.v'),
    P3x = c3x('nej.p'),
    bG4K = c3x('nej.ui'),
    cj4n = c3x('nej.ut'),
    y3x = c3x('nm.w'),
    b3x,
    L3x
  y3x.By2x = NEJ.C()
  b3x = y3x.By2x.M3x(bG4K.ep4t)
  L3x = y3x.By2x.ct4x
  b3x.cz4D = function () {
    this.cD4H()
  }
  b3x.bo3x = function (e3x) {
    this.bp3x(e3x)
    this.o3x = a3x.A3x(e3x.content)
    this.mR7K = a3x.A3x(e3x.slide)
    this.jG6A = a3x.A3x(e3x.track)
    this.bFb4f = e3x.speed
    this.bni1x = this.o3x.scrollHeight - this.o3x.clientHeight
    a3x.bc3x(this.mR7K, 'height', ((this.o3x.clientHeight / this.o3x.scrollHeight) * parseInt(a3x.dl4p(this.jG6A, 'height')) || 0) + 'px')
    if (this.o3x.scrollHeight <= this.o3x.clientHeight) a3x.bc3x(this.mR7K, 'display', 'none')
    else a3x.bc3x(this.mR7K, 'display', 'block')
    this.xo0x = cj4n.MS8K.B3x({
      slide: this.mR7K,
      track: this.jG6A,
      onchange: this.bnk1x.f3x(this)
    })
    if (P3x.dz4D.browser != 'firefox') this.bZ4d([[this.o3x, 'mousewheel', this.He3x.f3x(this)]])
    else {
      this.o3x.addEventListener('DOMMouseScroll', this.He3x.f3x(this), false)
    }
  }
  b3x.bC3x = function () {
    this.bH4L()
    this.xo0x.V3x()
    delete this.o3x
    delete this.mR7K
    delete this.jG6A
    delete this.iC6w
    delete this.bFb4f
  }
  b3x.bnk1x = function (d3x) {
    this.o3x.scrollTop = parseInt(this.bni1x * d3x.y.rate)
  }
  b3x.He3x = function (d3x) {
    h3x.co4s(d3x)
    this.bni1x = this.o3x.scrollHeight - this.o3x.clientHeight
    let dB4F = 0,
      LH7A,
      ck4o,
      gs5x
    ck4o = parseInt(this.jG6A.clientHeight) - parseInt(a3x.dl4p(this.mR7K, 'height'))
    dB4F = d3x.wheelDelta ? d3x.wheelDelta / 120 : -d3x.detail / 3
    LH7A = parseInt(a3x.dl4p(this.mR7K, 'top')) - dB4F * this.bFb4f
    if (LH7A < 0) LH7A = 0
    if (LH7A > ck4o) LH7A = ck4o
    a3x.bc3x(this.mR7K, 'top', LH7A + 'px')
    gs5x = parseInt(a3x.dl4p(this.mR7K, 'top'))
    this.xo0x.z3x('onchange', { y: { rate: gs5x / ck4o } })
  }
  b3x.qy9p = function () {
    this.bni1x = this.o3x.scrollHeight - this.o3x.clientHeight
    this.xo0x.hj5o({ x: 0, y: 0 })
    a3x.bc3x(this.mR7K, 'height', (this.o3x.clientHeight / this.o3x.scrollHeight) * parseInt(this.jG6A.clientHeight) + 'px')
    this.xo0x.xc0x({
      x: [],
      y: [0, this.jG6A.clientHeight - parseInt(a3x.dl4p(this.mR7K, 'height'))]
    })
    if (this.o3x.scrollHeight <= this.o3x.clientHeight) a3x.bc3x(this.mR7K, 'display', 'none')
    else a3x.bc3x(this.mR7K, 'display', 'block')
  }
  b3x.hj5o = function (dP4T) {
    this.xo0x.hj5o(dP4T)
  }
  b3x.LD7w = function (bnm1x) {
    let cuE0x = parseInt(a3x.dl4p(this.mR7K, 'height'))
    let cuM0x = parseInt(a3x.dl4p(this.jG6A, 'height'))
    let yX1x = cuM0x - cuE0x
    let gs5x = parseInt(yX1x * bnm1x) + 'px'
    a3x.bc3x(this.mR7K, 'top', gs5x)
  }
  b3x.bFn4r = function () {
    if (this.o3x.scrollHeight <= this.o3x.clientHeight) return
    let bnm1x = this.o3x.scrollTop / (this.o3x.scrollHeight - this.o3x.clientHeight)
    this.LD7w(bnm1x)
  }
  b3x.cPr3x = function () {
    if (this.xo0x) this.xo0x.xc0x()
  }
})()
;(function () {
  let c3x = NEJ.P,
    a3x = c3x('nej.e'),
    h3x = c3x('nej.v'),
    P3x = c3x('nej.ut'),
    yf1x
  P3x.Jz7s = NEJ.C()
  yf1x = P3x.Jz7s.M3x(P3x.cP4T)
  yf1x.bo3x = function (e3x) {
    this.bp3x(e3x)
    this.cpj9a = !!e3x.reset
    this.XX0x = parseInt(e3x.delta) || 0
    this.jG6A = a3x.A3x(e3x.track)
    this.bDk4o = a3x.A3x(e3x.progress)
    this.bZ4d([
      [e3x.thumb, 'mousedown', this.cpm9d.f3x(this)],
      [document, 'mousemove', this.bDt4x.f3x(this)],
      [document, 'mouseup', this.bmH1x.f3x(this)],
      [this.jG6A, 'mousedown', this.bDA4E.f3x(this)]
    ])
    let fx5C = e3x.value
    if (fx5C == null) {
      fx5C = this.bDk4o.offsetWidth / this.jG6A.offsetWidth
    }
    this.hj5o(fx5C)
  }
  yf1x.bC3x = function () {
    if (this.cpj9a) this.UC0x(0)
    this.bH4L()
  }
  yf1x.cpm9d = function (d3x) {
    if (this.im6g) return
    h3x.bh3x(d3x)
    this.im6g = h3x.kf6Z(d3x)
    this.bDC4G = this.jG6A.offsetWidth
  }
  yf1x.bDt4x = function (d3x) {
    if (!this.im6g) return
    let bn3x = h3x.kf6Z(d3x),
      dB4F = bn3x - this.im6g
    this.im6g = bn3x
    this.UC0x(this.JM7F + dB4F / this.bDC4G)
    this.z3x('onslidechange', { ratio: this.JM7F })
  }
  yf1x.bmH1x = function (d3x) {
    if (!this.im6g) return
    this.bDt4x(d3x)
    delete this.im6g
    delete this.bDC4G
    this.z3x('onslidestop', { ratio: this.JM7F })
  }
  yf1x.bDA4E = function (d3x) {
    let cpB9s = a3x.iy6s(this.jG6A).x,
      cpD9u = h3x.kf6Z(d3x)
    this.UC0x((cpD9u - cpB9s + this.XX0x) / this.jG6A.offsetWidth)
    this.z3x('onslidestop', { ratio: this.JM7F })
  }
  yf1x.UC0x = function (fx5C) {
    this.JM7F = Math.max(0, Math.min(1, fx5C))
    a3x.bc3x(this.bDk4o, 'width', this.JM7F * 100 + '%')
  }
  yf1x.hj5o = function (fx5C) {
    if (this.im6g) return
    this.UC0x(fx5C)
  }
  yf1x.byJ3x = function (fx5C) {
    return this.JM7F
  }
})()
;(function () {
  let c3x = NEJ.P,
    fG5L = NEJ.R,
    a3x = c3x('nej.e'),
    P3x = c3x('nej.p'),
    h3x = c3x('nej.v'),
    j3x = c3x('nej.u'),
    G3x = c3x('nej.ut'),
    t3x = c3x('nej.j'),
    F3x = c3x('nm.m'),
    dU4Y = c3x('nm.u'),
    l3x = c3x('nm.x'),
    y3x = c3x('nm.w'),
    b3x,
    L3x
  F3x.Yg1x = NEJ.C()
  b3x = F3x.Yg1x.prototype
  b3x.cz4D = function () {
    this.ik6e = location.parse(location.href).query
    this.o3x = a3x.A3x('player')
    this.bbU1x()
    this.cfW7P()
    this.bW4a()
    this.XZ0x()
    this.bCm4q()
    this.cfX7Q()
    this.dL4P.ni7b(0.8)
  }
  b3x.bbU1x = function () {
    let Fc3x = a3x.du4y('audio'),
      eo4s = Fc3x.canPlayType && Fc3x.canPlayType('audio/mpeg') ? dU4Y.TF9w : dU4Y.MY8Q
    this.dL4P = eo4s.B3x({
      onstatechange: this.gF5K.f3x(this),
      onloadprogress: this.Ab1x.f3x(this),
      onplayprogress: this.wO0x.f3x(this)
    })
  }
  b3x.cfW7P = function () {
    if (this.ik6e.height == 32) {
      this.cd4h = 'player-sm'
    } else if (this.ik6e.height == 66) {
      this.cd4h = 'player-mid'
    } else if (this.ik6e.height == 90) {
      this.cd4h = 'player-bg'
    } else {
      this.cd4h = 'player-list'
    }
    if (this.ik6e.bg) {
      a3x.bc3x(document.body, 'background', '#' + this.ik6e.bg)
    }
    this.o3x.innerHTML = a3x.io6i(this.cd4h)
  }
  b3x.bW4a = function () {
    this.lv7o = a3x.A3x('cover')
    this.jW6Q = a3x.A3x('title')
    this.KP7I = a3x.A3x('bar')
    this.qT9K = a3x.A3x('time')
    this.gJ5O = a3x.A3x('prev')
    this.In6h = a3x.A3x('next')
    this.hG5L = a3x.A3x('play')
    this.bJJ5O = a3x.A3x('pause')
    this.cMN3x = a3x.A3x('open')
    this.bO4S = a3x.A3x('list')
    this.HF6z = a3x.A3x('list-box')
    this.ny8q = a3x.A3x('loading')
    this.bJL5Q = a3x.A3x('ctrl-box')
    this.bJM5R = a3x.A3x('sm-mid')
    this.bJN5S = a3x.A3x('mid-ctrl')
    h3x.s3x(this.o3x, 'click', this.bN4R.f3x(this))
    h3x.s3x(document, 'mouseout', this.RD9u.f3x(this))
    h3x.s3x(window, 'resize', this.EK2x.f3x(this))
    h3x.s3x(window, 'beforeunload', this.buF3x.f3x(this))
  }
  b3x.XZ0x = function () {
    let k3x = a3x.C3x(this.KP7I, 'j-flag')
    this.xo0x = G3x.Jz7s.B3x({
      track: this.KP7I,
      thumb: k3x[1],
      progress: k3x[0],
      onslidechange: this.bnk1x.f3x(this),
      onslideStop: this.bmH1x.f3x(this)
    })
  }
  b3x.bCm4q = function () {
    if (!this.bO4S) return
    let k3x = a3x.C3x(this.bO4S, 'j-flag')
    this.jy6s = y3x.By2x.B3x({ content: this.HF6z, slide: k3x[1], track: k3x[0], speed: 5 })
  }
  b3x.cfX7Q = function () {
    let cgf7Y = {
        0: '/api/v6/playlist/detail',
        1: '/api/album/{id}',
        2: '/api/song/detail',
        3: '/api/dj/program/detail',
        4: '/api/dj/program/byradio?radioId={id}'
      },
      Y3x = cgf7Y[this.ik6e.type]
    t3x.be3x(l3x.bde2x(Y3x, this.ik6e), {
      type: 'json',
      query: { id: this.ik6e.id, ids: JSON.stringify([this.ik6e.id]), limit: 1e4, offset: 0 },
      onload: this.bJP5U.f3x(this),
      onerror: this.bJP5U.f3x(this)
    })
  }
  b3x.bJP5U = function (d3x) {
    let res = null
    if (d3x.code == 200) {
      switch (parseInt(this.ik6e.type)) {
        case 0:
          res = j3x.bAN4R(d3x)
          this.gN5S = res.result.tracks
          this.jW6Q.innerHTML = a3x.bY4c('title', { title: j3x.dN4R(d3x.result.name) })
          this.Aa1x(d3x.result.coverImgUrl)
          break
        case 1:
          this.gN5S = d3x.album.songs
          this.jW6Q.innerHTML = a3x.bY4c('title', {
            title: d3x.album.name,
            sub: d3x.album.artist.name
          })
          this.Aa1x(d3x.album.picUrl)
          break
        case 2:
          this.gN5S = d3x.songs
          var bi3x = d3x.songs[0],
            go5t = []
          j3x.bg3x(bi3x.artists, function (wq0x) {
            go5t.push(wq0x.name)
          })
          this.jW6Q.innerHTML = a3x.bY4c('title', { title: bi3x.name, sub: go5t.join('/') })
          this.Aa1x(bi3x.album.picUrl)
          break
        case 3:
          this.gN5S = [d3x.program.mainSong]
          this.jW6Q.innerHTML = a3x.bY4c('title', { title: j3x.dN4R(d3x.program.name) })
          this.Aa1x(d3x.program.coverUrl)
          break
        case 4:
          if (d3x.programs && d3x.programs.length) {
            let dK4O = d3x.programs[0].radio
            this.jW6Q.innerHTML = a3x.bY4c('title', { title: j3x.dN4R(dK4O.name) })
            this.Aa1x(dK4O.picUrl)
            this.gN5S = []
            j3x.bg3x(
              d3x.programs,
              function (dg4k) {
                if (dg4k.mainSong) {
                  dg4k.mainSong.name = dg4k.name
                  dg4k.mainSong.artists = [{ name: dK4O.name }]
                  this.gN5S.push(dg4k.mainSong)
                }
              },
              this
            )
          }
          break
      }
      this.cgi7b()
      if (parseInt(this.ik6e.auto)) {
        this.HB6v(0)
      }
      this.EK2x()
      this.nu8m()
      if (this.jy6s) this.jy6s.qy9p()
    } else {
      alert('资源加载失败')
    }
  }
  b3x.HB6v = function (r3x) {
    r3x = parseInt(r3x) || 0
    if (r3x > this.gN5S.length - 1) {
      r3x = 0
    } else if (r3x < 0) {
      r3x = this.gN5S.length - 1
    }
    let i3x = this.gN5S[r3x]
    if (i3x.status < 0 || (i3x.fee > 0 && i3x.fee != 8)) return
    this.dL4P.ey4C('', i3x.id)
    this.HA6u = r3x
  }
  b3x.cgi7b = function () {
    window.setTimeout(
      function () {
        if ((this.jW6Q.clientHeight || this.jW6Q.scrollHeight) > 33) {
          this.jW6Q.innerHTML = '<marquee scrollamount="2" onmouseover="this.stop()" onmouseout="this.start()">' + this.jW6Q.innerHTML + '</marquee>'
        }
      }.f3x(this),
      100
    )
  }
  b3x.Aa1x = function (da4e) {
    if (this.lv7o) {
      this.lv7o.src = l3x.cak8c(da4e) + '?param=90y90'
    }
  }
  b3x.nu8m = function () {
    if (this.HF6z) {
      a3x.do4s(this.HF6z, 'song-list', { playIndex: this.HA6u, songs: this.gN5S }, { getArtist: l3x.sV9M })
      this.EK2x(true)
    }
  }
  b3x.bN4R = function (d3x) {
    let g3x = h3x.ba3x(d3x, 'd:action')
    switch (a3x.u3x(g3x, 'action')) {
      case 'play':
        console.log('this.__playIndex', this.HA6u)
        if (typeof this.HA6u == 'undefined') {
          this.HB6v(0)
          this.nu8m()
        } else {
          this.dL4P.oZ8R()
        }
        break
      case 'pause':
        this.dL4P.fL5Q()
        break
      case 'next':
        this.HB6v(this.HA6u + 1)
        this.nu8m()
        break
      case 'prev':
        this.HB6v(this.HA6u - 1)
        this.nu8m()
        break
      case 'playByIndex':
        this.HB6v(a3x.u3x(g3x, 'index'))
        this.nu8m()
        break
      case 'open':
        if (a3x.bE3x(this.bO4S, 'z-close')) {
          a3x.x3x(this.bO4S, 'z-close')
        } else {
          a3x.w3x(this.bO4S, 'z-close')
        }
        break
      case 'home':
        window.open(location.protocol + '//music.163.com')
        break
    }
  }
  b3x.bnk1x = function (d3x) {}
  b3x.bmH1x = function (d3x) {
    if (d3x.ratio == 1) {
      this.HB6v(this.HA6u + 1)
      this.nu8m()
      return
    }
    this.dL4P.pZ8R(d3x.ratio)
  }
  b3x.gF5K = function (d3x) {
    switch (d3x.state) {
      case 1:
        a3x.w3x(this.hG5L, 'f-hide')
        a3x.x3x(this.bJJ5O, 'f-hide')
        break
      case 2:
        a3x.x3x(this.hG5L, 'f-hide')
        a3x.w3x(this.bJJ5O, 'f-hide')
        break
      case 4:
        this.HB6v(this.HA6u + 1)
        this.nu8m()
        break
    }
  }
  b3x.Ab1x = function () {}
  b3x.wO0x = function (d3x) {
    if (this.qT9K) {
      this.qT9K.innerText = '- ' + l3x.lY7R(d3x.duration - d3x.current)
    }
    this.xo0x.hj5o(d3x.current / d3x.duration)
  }
  b3x.EK2x = function (cgl7e) {
    let cK4O = document.body.clientWidth - 20,
      ck4o = document.body.clientHeight - 20
    a3x.fp5u(this.o3x, { width: cK4O + 'px', height: ck4o + 'px' })
    if (this.bJL5Q) {
      a3x.bc3x(this.bJL5Q, 'width', cK4O - 20 - 90 + 'px')
    }
    if (this.HF6z) {
      let cgm7f = a3x.C3x(this.HF6z, 'name'),
        cgn7g = a3x.C3x(this.HF6z, 'by'),
        bJR5W = cK4O - 68
      j3x.bg3x(cgm7f, function (tq9h, r3x) {
        a3x.bc3x(tq9h, 'width', bJR5W * 0.7 + 'px')
        a3x.bc3x(cgn7g[r3x], 'width', bJR5W * 0.3 + 'px')
        a3x.bc3x(tq9h.parentNode, 'width', cK4O - 18 + 'px')
      })
      a3x.bc3x(this.HF6z.parentNode, 'height', ck4o - 130 + 'px')
      a3x.bc3x(this.bO4S, 'height', ck4o - 90 + 'px')
      if (this.jy6s && !cgl7e) this.jy6s.qy9p()
    }
    if (this.bJM5R) {
      a3x.bc3x(this.bJM5R, 'width', cK4O - 84 + 'px')
    }
    if (this.bJN5S) {
      a3x.bc3x(this.bJN5S, 'width', cK4O - 86 + 'px')
      a3x.bc3x(this.KP7I, 'width', cK4O - 86 - 44 + 'px')
      a3x.bc3x(this.jW6Q, 'width', this.jW6Q.parentNode.clientWidth - 24 + 'px')
    }
  }
  b3x.RD9u = function (d3x) {
    let di4m = h3x.kf6Z(d3x),
      ia6U = h3x.mP7I(d3x)
    if (di4m <= 0 || ia6U <= 0 || di4m >= document.body.clientWidth || ia6U >= document.body.clientHeight) {
      h3x.z3x(document, 'mouseup', d3x)
    }
  }
  b3x.buF3x = function () {
    this.dL4P.bh3x()
  }
  a3x.cW4a('template-box')
  new F3x.Yg1x()
})()
